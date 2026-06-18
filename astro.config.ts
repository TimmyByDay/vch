import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
export default defineConfig({
	site: "http://localhost:4321",
	integrations: [svelte()],
	env: {
		schema: {
			OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
			OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
		},
	},
	vite: {
		plugins: [tailwindcss() as any],
	},
	adapter: node({
		mode: "standalone",
	}),
});
