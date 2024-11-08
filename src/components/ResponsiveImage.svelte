<script>
  import { createEventDispatcher } from "svelte";
  import Tooltip from "./Tooltip.svelte";

  export let image = {};
  export let allowFeatured = false;

  const setFeaturedText = "click to feature image"

  const dispatch = createEventDispatcher();

  function setFeaturedImage(image) {
    dispatch("setFeaturedImage", image);
  }
</script>

<section class="grid grid-cols-1 content-center col-span-1">
  <div class="relative group flex flex-col gap-2">
    {#if allowFeatured}
      <Tooltip text={setFeaturedText} />
    {/if}

    <button 
      class="w-full"
      on:click={() => allowFeatured && dispatch('setFeaturedImage', image)}
    >
      <img
        id={image.fileName}
        srcset={`${image.fileName}-800.webp 800w, ${image.fileName}-1800.webp 1800w, ${image.fileName}-2400.webp 2400w`}
        sizes="(max-width: 800px) 100vw,
               (max-width: 1024px) 90vw,
               (max-width: 1800px) 50vw,
               33vw"
        src={`${image.fileName}-2400.jpeg`}
        alt="photography"
        class="{image.aspectRatio > 1 ? 'md:max-h-[90svh]' : ''} object-contain mx-auto transition-all duration-300 group-hover:brightness-95"
      />
    </button>

    {#if allowFeatured}
      <Tooltip text={setFeaturedText} />
    {/if}
  </div>
</section>
