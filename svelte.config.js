import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter: adapter()
    // adapter: firebase()
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/playground" : "",
    },
    appDir: "internal",
  },

  preprocess: [vitePreprocess({})],
};
export default config;
