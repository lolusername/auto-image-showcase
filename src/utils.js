export function shuffleArray(array) {
  let copy = [...array]; // Create a copy of the array
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

export function getLayout(featuredImage) {
  const isWindowPortrait = window.innerHeight > window.innerWidth;
  const windowAspectRatio = window.innerHeight / window.innerWidth;
  const imageIsPortrait = featuredImage.aspectRatio < 1;

  // Calculate dimensions based on orientation and aspect ratio
  const getWidth = () => {
    if (!isWindowPortrait) {
      return `${Math.max(
        33,
        100 - (windowAspectRatio / featuredImage.aspectRatio) * 100
      )}vw`;
    }
    return "100vw";
  };

  const getHeight = () => {
    if (isWindowPortrait) {
      return `${Math.max(
        100,
        (imageIsPortrait ? 100 : 100) -
          (featuredImage.aspectRatio / windowAspectRatio) * 100
      )}vh`;
    }
    return "100vh";
  };

  const getFeaturedImageWidth = () => {
    if (isWindowPortrait && !imageIsPortrait) {
      return "auto";
    }
    return `${Math.min(
      67,
      (windowAspectRatio / featuredImage.aspectRatio) * 100
    )}vw`;
  };
  return {
    width: getWidth(),
    height: getHeight(),
    featuredImageHeight: "auto",
    featuredImageWidth: getFeaturedImageWidth(),
  };
}
