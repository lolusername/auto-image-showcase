<script>
  import { onMount } from "svelte";
  import images from "./assets/photos.json";
  import ResponsiveImage from "./components/ResponsiveImage.svelte";
  import { shuffleArray } from "./utils";
  let mainWidth, mainHeight;

  function setMainWidth() {
    const windowAspectRatio = window.innerHeight / window.innerWidth;
    if (windowAspectRatio > 1) {
      return "100svw";
    }
    return `${Math.max(
      10,
      100 - (windowAspectRatio / featuredImage.aspectRatio) * 100
    )}%`;
  }

  function setMainHeight() {
    const windowAspectRatio = window.innerHeight / window.innerWidth;
    if (windowAspectRatio < 1) {
      return "100svh";
    }
    return `${Math.max(
      10,
      100 - (featuredImage.aspectRatio / windowAspectRatio) * 100
    )}svh`;
  }

  let featuredImage = images[1];

  function setFeaturedImage(image) {
    featuredImage = image.detail;
    mainHeight = setMainHeight();
    mainWidth = setMainWidth();
    scrollToNextImage(image);
  }
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
        block: "start",
        inline: "center",
      });
    }, 300);
  }
  const handleResize = () => {
    mainHeight = setMainHeight();
    mainWidth = setMainWidth();
  };
  onMount(() => {
    mainHeight = setMainHeight();
    mainWidth = setMainWidth();
  });
  $: shuffledImages = shuffleArray(images);
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);
</script>

<div
  class="bg-fixed bg-contain bg-bottom sm:bg-left-top bg-no-repeat min-h-svh"
  style="background-image:url({featuredImage.fileName}-2400.jpeg)"
>
  <main
    style="width: {mainWidth};height:{mainHeight}"
    class="{mainWidth < 25
      ? 'bg-stone-100 grid-cols-2 sm:grid-cols-1 md:gap-y-24 '
      : 'md:gap-y-12 sm:gap-x-12 p-0'} overflow-auto md:border-l-4 border-stone-900 transition-all duration-300 justify-items-center
      grid grid-cols-3 sm:grid-cols-1 p-4 gap-4 ml-auto ease-linear bg-stone-100 sticky bottom-0 sm:bottom-auto sm:relative"
  >
    {#each shuffledImages as image}
      <ResponsiveImage {image} on:setFeaturedImage={setFeaturedImage} />
    {/each}
  </main>
</div>
