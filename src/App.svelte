<script>
  import images from "./assets/photos.json";
  import ResponsiveImage from "./components/ResponsiveImage.svelte";
  import { shuffleArray, getLayout } from "./utils";
  import { Router, Route } from "svelte-routing";
  import DIT from "./routes/dit.svelte"

  const PATH = window.location.pathname

  const shuffledImages = shuffleArray(images);
  let orientation = "portrait";
  let layout = {};
  let featuredImage = PATH != '/dit' ? images[7]:'';



  const getOrientation = () =>
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  const setFeaturedImage = (image) => {
    featuredImage = image.detail;
    layout = getLayout(featuredImage);
    if (orientation === "portrait") return;
    else scrollToNextImage(image);
  };
  function scrollToNextImage(image) {
    const img = shuffledImages.find((shuffledImage) => {
      return shuffledImage.fileName === image.detail.fileName;
    });
    const idx =
      shuffledImages.indexOf(img) === shuffledImages.length - 1
        ? -1
        : shuffledImages.indexOf(img);

    const nextImage = shuffledImages[idx + 1];
    const nextImageElement = document.getElementById(nextImage.fileName);
    setTimeout(() => {
      nextImageElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 700);
  }
  $: {
    orientation = getOrientation();
    layout = getLayout(featuredImage);
  }
</script>

<div
  class="{orientation === 'portrait' ? 'bg-center-bottom' : 'sm:bg-left'} 
    bg-stone-100 bg-fixed bg-contain bg-top bg-no-repeat min-h-svh"
  style="background-image:url({featuredImage.fileName}-2400.jpeg); 
  background-size: {`${layout.featuredImageWidth} ${layout.featuredImageHeight}`};"
>

<Router>
  <Route path="/"  > 
    <main
    style="width: {layout.width};height:{layout.height}"
    class="{orientation === 'portrait'
      ? 'grid-cols-1 lg:grid-cols-2 border-b-4 gap-y-20 lg:pt-40'
      : 'grid-cols-1 border-l-2 border-stone-900'} 
      overflow-auto border-stone-900 transition-all duration-700 ease-linear justify-items-center
      grid p-0.5 md:p-6 gap-3 md:gap-y-20 ml-auto ease-linear bg-stone-100 sticky bottom-0 sm:bottom-auto sm:relative"
  >
    <section class="{orientation === 'portrait' ? 'lg:absolute' : ''} pt-10">
      <h1 class="text-5xl text-stone-900">Atilio Barreda II</h1>
      <h2 class="text-4xl text-stone-400">photos</h2>
    </section>
    
    {#each shuffledImages as image}
      <ResponsiveImage {image} on:setFeaturedImage={setFeaturedImage} />
    {/each}
  </main>
</Route>
  <Route path="dit" component="{DIT}"></Route>
</Router>

</div>

<style>
  * {
    font-family: "larken", sans-serif;font-weight: 700;font-style: normal;
    font-weight: 400;
    font-style: normal;
  }
  h2 {
    font-family: "larken", sans-serif;font-weight: 700;font-style: italic;
  }
</style>
