import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { imagetools } from "vite-imagetools";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  plugins: [imagetools(), enhancedImages()],
  preprocess: vitePreprocess(),
  assetsInclude: ["*", "**/*", "**/**/*"],
};
