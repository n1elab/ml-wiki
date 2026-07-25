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
				{ icon: 'discord', label: 'Discord', href: 'http://discord.gg/UyKV4BDxBR' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/ml_ms2' },
				{ icon: 'youtube', label: 'youtube', href: 'https://www.youtube.com/channel/UC_p9eD-ZmbDRSJ5HsvDqcoQ?sub_confirmation=1' },
				{ icon: 'pencil', label: 'Edit', href: 'https://github.com/n1elab/ml-wiki/' }
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
				{
					label: '⛓️ 関連リンク',
					items: [
						{ label: '🏠 公式サイト', link: 'http://mlms.n1e.net' },
						{ label: '📄 公式Wiki', link: 'http://wiki-mlms.n1e.net' },
						{ label: '🗺️ ウェブマップ', link: 'http://map-mlms.n1e.net' },
						{ label: '💬 公式Discord', link: 'http://discord.gg/UyKV4BDxBR' },
					],
				},
			],
		}),
	],
});
