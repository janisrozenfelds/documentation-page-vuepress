module.exports = {
	base: '/documentation-page-vuepress/',
	title: 'Documentation Exmaple Page',
	description: 'VuePress and deployed on Github Pages',
	dest: './docs',

		// Header Nav Language button
		locales: {
		'/': {
			lang: 'English',
			title: "Documentation Exmaple Page",
			description: '----'
		}
	},

	themeConfig: {
		// Header Nav Logo
		logo: 'logo.svg',

		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'janisrozenfelds/documentation-page-vuepress/',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',

		// Optional options for generating "Edit this page" link

		// if your docs are in a different repo from your main project:
		docsRepo: 'janisrozenfelds/documentation-page-vuepress/',
		// if your docs are not at the root of the repo:
		docsDir: '',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
		// defaults to false, set to true to enable
		editLinks: true,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: 'Help us improve this page!',

		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				lastUpdated: 'Last Updated',
				sidebar: [
					'/guide/'
				]
			}
		}
	}
}
