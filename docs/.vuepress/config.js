const path = require('path')

module.exports = {
    logo: path.resolve(__dirname + '/images/', 'logo.gif'),
    title: 'Doc',
    description: '我的个人DOC',
    base: '/',
    palette: path.resolve(__dirname, 'palette.styl'),   //  设置主题样式
    //  多语言设置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'Chinese', // 将会被设置为 <html> 的 lang 属性
            title: 'Doc',
            description: 'DOC笔记'
        },
        '/zh/': {
            lang: 'English',
            title: 'Doc',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
    },
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
                    { text: 'Javascript', link: '/guide/Javascript/javascript' }
                ]
            }
        ],
        sidebarDepth: 4, // 侧边栏显示2级
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        search: true,   //  禁用或者开启内置搜索框
        searchMaxSuggestions: 10,    //  调整默认搜索框显示的搜索结果数量
        sidebar: 'auto'
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
    ]
}