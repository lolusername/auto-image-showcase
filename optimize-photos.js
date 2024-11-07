import fs from "fs";
import path from "path";
import sharp from "sharp";

// Directory containing the original images
const inputDir = "./src/photos";

// Directory to save the optimized images
const outputDir = "./public/photos";

// Function to clear the contents of the output directory
function clearDirectory(directory) {
  // Read all files in the directory
  const files = fs.readdirSync(directory);

  // Loop through each file and delete it
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    fs.unlinkSync(filePath);
  });
}

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
} else {
  // If the directory exists, clear its contents
  clearDirectory(outputDir);
}

// Define the sizes and formats for the output images
const sizes = [800, 1800, 2400]; // Width in pixels
const formats = ["jpeg", "webp"]; // Output formats

// Process each file in the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const filePath = path.join(inputDir, file);

  sizes.forEach((size) => {
    formats.forEach((format) => {
      const outputFilePath = path.join(
        outputDir,
        `${path.basename(file, path.extname(file))}-${size}.${format}`
      );

      sharp(filePath)
        .resize({ width: size })
        .toFormat(format)
        .toFile(outputFilePath)
        .then(() => console.log(`Processed: ${outputFilePath}`))
        .catch((err) => console.error(`Error processing ${file}:`, err));
    });
  });
});
