<script>
  import imageData from "./assets/photos.json";
</script>

{#each imageData as image}
  <img src={`/${image.fileName}-1200.jpeg`} alt="s " />
{/each}

<style>
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
</style>
