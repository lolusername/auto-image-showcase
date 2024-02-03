<script>
  export let image = {};
</script>

<img
  srcset={`${image.fileName}-480.webp 480w, ${image.fileName}-1200.webp 1200w, ${image.fileName}-2400.webp 2400w`}
  sizes="(max-width: 600px),
         (max-width: 1200px),
         2400px"
  src={`${image.fileName}-2400.jpeg`}
  alt="Description"
/>

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>
