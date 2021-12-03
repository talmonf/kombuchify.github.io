// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'kombuchify',
	url: 'https://kombuchify.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'kombuchify',
	projectName: 'kombuchify.github.io',
	deploymentBranch: 'gh-pages',
	trailingSlash: false,

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/kombuchify/kombuchify.github.io/tree/master/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'kombuchify',
				logo: {
					alt: 'kombuchify Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'localeDropdown',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `Copyright © ${new Date().getFullYear()} Rafael Horvat. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'fr'],
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
			},
			de: {
				label: 'Deutsch',
				direction: 'ltr',
			},
			fr: {
				label: 'Français',
				direction: 'ltr',
			},
		},
	},

	plugins: [
		[
			'@docusaurus/plugin-sitemap',
			{
				changefreq: 'weekly',
				priority: 0.5,
			},
		],
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'mobile'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/logo.png',
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(215, 117, 38)',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
				],
			},
		],
	],
};

module.exports = config;
