// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pagePlugin from "@pelagornis/page";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [pagePlugin()],
			title: 'MiLight Server Wiki💡ミライト鯖 Wiki',
			social: [
				{ icon: 'pencil', label: 'Edit', href: 'https://github.com/n1elab/ml-wiki/' },
				{ icon: 'discord', label: 'Discord', href: 'http://discord.gg/UyKV4BDxBR' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
