<script>
  import { onMount } from "svelte";
  import images from "./assets/photos.json";
  import ResponsiveImage from "./components/ResponsiveImage.svelte";
  import { shuffleArray, getLayout } from "./utils";

  const shuffledImages = shuffleArray(images);
  let orientation = "portrait";
  let layout = {};
  let featuredImage = images[1];

  const getOrientation = () =>
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  const setFeaturedImage = (image) => {
    featuredImage = image.detail;
    layout = getLayout(featuredImage);
    scrollToNextImage(image);
  };
  function scrollToNextImage(image) {
    const img = shuffledImages.find((shuffledImage) => {
      return shuffledImage.fileName === image.detail.fileName;
    });
    const idx =
      shuffledImages.indexOf(img) === shuffledImages.length - 1
        ? 0
        : shuffledImages.indexOf(img);

    const nextImage = shuffledImages[idx + 1];
    const nextImageElement = document.getElementById(nextImage.fileName);
    setTimeout(() => {
      nextImageElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  }
  $: {
    orientation = getOrientation();
    layout = getLayout(featuredImage);
  }

  onMount(() => {
    window.addEventListener("resize", () => {
      orientation = getOrientation();
      layout = getLayout(featuredImage);
    });
    window.addEventListener("orientationchange", () => {
      orientation = getOrientation();
      layout = getLayout(featuredImage);
    });
  });
</script>

<div
  class="{orientation === 'portrait'
    ? 'bg-center-bottom'
    : 'sm:bg-left-bottom'} 
    bg-stone-900 bg-fixed bg-contain bg-bottom bg-no-repeat min-h-svh"
  style="background-image:url({featuredImage.fileName}-2400.jpeg); 
  background-size: {`${layout.featuredImageWidth} ${layout.featuredImageHeight}`};"
>
  <main
    style="width: {layout.width};height:{layout.height}"
    class="{orientation === 'portrait'
      ? 'grid-cols-2 md:grid-cols-3 border-b-4'
      : 'grid-cols-1 border-l-4'} 
      overflow-auto border-stone-900 transition-all duration-300 justify-items-center
      grid p-4 gap-3 md:gap-y-24 ml-auto ease-linear bg-stone-100 sticky bottom-0 sm:bottom-auto sm:relative"
  >
    {#each shuffledImages as image}
      <ResponsiveImage {image} on:setFeaturedImage={setFeaturedImage} />
    {/each}
  </main>
</div>
