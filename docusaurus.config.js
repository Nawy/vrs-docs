// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Versolid',
    tagline: 'We make game development easy',
    url: 'https://versolid.com',
    baseUrl: '/',
    //baseUrl: '/versolid_docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    trailingSlash: true,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                hideOnScroll: true,
                title: 'Versolid',
                logo: {
                    alt: 'Versolid Logo',
                    src: 'img/logo-symbol.svg',
                },
                items: [{
                    label: 'Explore',
                    href: '/',
                }, {
                    type: 'doc',
                    docId: 'intro',
                    label: 'Tutorial',
                },
                { to: '/blog', label: 'Blog' },
                ],
            },
            footer: {
                logo: {
                    alt: 'Versolid Logo',
                    src: 'img/logo-symbol.svg',
                    height: 20,
                },
                // links: [{
                //     items: [{
                //         label: 'Explore',
                //         href: '/',
                //     }, {
                //         type: 'doc',
                //         docId: 'intro',
                //         label: 'Tutorial',
                //     },
                //     { to: '/blog', label: 'Blog' },
                //     ],
                // }],
                // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;