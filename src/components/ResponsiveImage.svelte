<script>
  import { createEventDispatcher } from "svelte";

  export let image = {};

  const dispatch = createEventDispatcher();

  function setFeaturedImage(image) {
    dispatch("setFeaturedImage", image);
  }
</script>

<section class="grid grid-cols-1 content-center col-span-1">
  <button on:click={() => setFeaturedImage(image)}>
    <img
      id={image.fileName}
      srcset={`${image.fileName}-800.webp 800w, ${image.fileName}-1800.webp 1800w, ${image.fileName}-2400.webp 2400w`}
      sizes="(max-width: 800px),
         (max-width: 1800px),
         2400px"
      src={`${image.fileName}-2400.jpeg`}
      alt="photography"
      title="SET AS FEATURED IMAGE"
      class="{image.aspectRatio > 1
        ? 'md:max-h-[90svh]'
        : ''}  object-contain mx-auto"
    />
  </button>
</section>
