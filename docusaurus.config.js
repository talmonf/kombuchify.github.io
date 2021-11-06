// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'kombuchify',
	tagline: 'Kombucha is life',
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
					editUrl: 'https://github.com/kombuchify/kombuchify/tree/master/',
				},
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
};

module.exports = config;
