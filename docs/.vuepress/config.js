const path = require('path')

module.exports = {
    logo: '/images/logo.jpg',
    title: 'Doc',
    description: '我的个人DOC',
    base: '/',
    palette: path.resolve(__dirname, 'palette.styl'),   //  设置主题样式
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/assets/images/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    port: 8088,
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        overrideTheme: { light: [6, 18], dark: [18, 6] },
        // overrideTheme: 'dark',
        smoothScroll: true, //  启动页面滚动
        nav: [ // 导航栏配置
            {
                text: '首页',
                link: '/'
            },
            {
                text: '学习',
                link: '',
                ariaLabel: 'Menu',
                items: [    //  设置导航栏下拉
                    {
                        text: 'Javascript',
                        link: '/'
                    }
                ]
            }
        ],
        sidebarDepth: 4, // 侧边栏显示2级
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        search: true,   //  禁用或者开启内置搜索框
        searchMaxSuggestions: 10,    //  调整默认搜索框显示的搜索结果数量
        sidebar: [
            {
                title: '介绍',   // 必要的
                path: '/guide/index/about',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '简介',   // 必要的
                        path: '/guide/index/about',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    }
                ]
            },
            {
                title: '计划',   // 必要的
                path: '/guide/index/plan',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: []
            }
        ]
    },
    markdown: {
        lineNumbers: true,   //  设置Markdown行号
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] }
    },
    /** 插件 **/
    plugins: [
        //  返回顶部插件
        ['@vuepress/back-to-top'],
        //  离线加载插件
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        ['vuepress-plugin-code-copy'],
        ['@vuepress/nprogress']
    ],
    locales: {
        '/': {
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
                updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                }
            },
            // 当前 locale 的 algolia docsearch 选项
            algolia: {},
            nav: [
                { text: '嵌套', link: '/zh/nested/' }
            ],
            sidebar: {
                '/zh/': [/* ... */],
                '/zh/nested/': [/* ... */]
            }
        },
        '/en/': {
            selectText: '多语言',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            },
            algolia: {},
            nav: [
                { text: 'Nested', link: '/guide/index/index', ariaLabel: 'Nested' }
            ],
            sidebar: {
                '/': [
                    'guide/index index'
                ],
                '/guide/index/index/': [/* ... */]
            }
        }
    }
}