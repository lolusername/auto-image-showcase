import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesFolder = "./src/photos";
const outputJson = "./src/assets/photos.json";

const getImageAspectRatio = async (filePath) => {
  try {
    const metadata = await sharp(filePath).metadata();
    return metadata.height / metadata.width;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
};

const updateOrPush = (existingData, file, aspectRatio) => {
  const existingEntry = existingData.find((entry) => entry.path === file);
  if (existingEntry) {
    existingEntry.aspectRatio = aspectRatio;
    return existingData;
  } else {
    const baseNameWithoutExt = file.substring(0, file.lastIndexOf("."));
    return [...existingData, { fileName: baseNameWithoutExt, aspectRatio }];
  }
};

const generateJson = async () => {
  const files = fs.readdirSync(imagesFolder);
  let existingData = [];

  if (fs.existsSync(outputJson)) {
    const jsonData = fs.readFileSync(outputJson, "utf8");
    existingData = JSON.parse(jsonData);
  }

  const promises = files.map(async (file) => {
    const filePath = path.join(imagesFolder, file);
    const aspectRatio = await getImageAspectRatio(filePath);
    if (aspectRatio) {
      const relativePath = `photos/${file}`;
      existingData = updateOrPush(existingData, relativePath, aspectRatio);
    }
  });

  await Promise.all(promises);

  fs.writeFileSync(outputJson, JSON.stringify(existingData, null, 2));
  console.log(`Generated JSON file at ${outputJson}`);
};

generateJson();
