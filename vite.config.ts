import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        notFound: new URL("404.html", import.meta.url).pathname,
        main: new URL("index.html", import.meta.url).pathname,
        privacyJa: new URL("privacy/ja/index.html", import.meta.url).pathname,
        privacyEn: new URL("privacy/en/index.html", import.meta.url).pathname,
        termsJa: new URL("terms/ja/index.html", import.meta.url).pathname,
        termsEn: new URL("terms/en/index.html", import.meta.url).pathname,
      },
    },
  },
  plugins: [],
});
