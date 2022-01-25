import adapter from "@sveltejs/adapter-auto";
import sveltePreprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		vite: {
			resolve: {
				alias: {
					"@components": path.resolve("./src/components"),
				},
			},
		},
	},
};

export default config;
