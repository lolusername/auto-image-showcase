<script>
  import images from "./assets/photos.json";
  import ResponsiveImage from "./components/ResponsiveImage.svelte";
</script>

{#each images as image}
  <ResponsiveImage {image} />
{/each}

<style>
</style>
