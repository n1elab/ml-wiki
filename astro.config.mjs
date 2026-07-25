// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MiLight Server Wiki💡ミライト鯖 Wiki',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'http://discord.gg/UyKV4BDxBR' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/ml_ms2' },
				{ icon: 'youtube', label: 'youtube', href: 'https://www.youtube.com/channel/UC_p9eD-ZmbDRSJ5HsvDqcoQ?sub_confirmation=1' },
				{ icon: 'pen', label: 'Edit', href: 'https://github.com/n1elab/ml-wiki/' }
			],
			sidebar: [
				{
					label: 'ガイド',
					items: [
						{ label: '🛡️ 利用規約', slug: 'rules' },
						{ label: '🚪 参加方法', slug: 'join' },
					],
				},
				{
					label: '関連リンク',
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
