// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Toy Management",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kalemmentore868",
        },
      ],
      sidebar: [
        {
          label: "Front End",
          autogenerate: { directory: "guides/frontend" },
        },

        {
          label: "Back End",
          autogenerate: { directory: "guides/backend" },
        },
      ],
    }),
  ],
});
