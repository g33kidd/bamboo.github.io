import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bamboo.github.io',
	integrations: [
		starlight({
			title: 'Bamboo Docs',
			tagline: 'Web Framework for Bun.sh',
			social: {
				github: 'https://github.com/g33kidd/bamboo',
			},
			// TODO: Update this when more pages are written
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{label: 'Getting Started', link: '/guides/getting-started'},
			// 			{ label: 'Example Guide', link: '/guides/example/' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
		}),
	],
});
