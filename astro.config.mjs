import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  redirects: {
    '/': 'https://desty.store/albaniah'
  },
  output: "server",
  adapter: vercel()
});