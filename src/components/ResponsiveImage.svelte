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
      srcset={`${image.fileName}-480.webp 480w, ${image.fileName}-1200.webp 1200w, ${image.fileName}-2400.webp 2400w`}
      sizes="(max-width: 600px),
         (max-width: 1200px),
         2400px"
      src={`${image.fileName}-2400.jpeg`}
      alt="Description"
      class="{image.aspectRatio > 1
        ? 'md:max-h-[90svh]'
        : ''}  object-contain mx-auto"
    />
  </button>
</section>
