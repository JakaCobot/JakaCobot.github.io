module.exports = {
    locales:{
        '/':{
            lang:'zh-CN',
            title: "文档",
            description: "JAKA 文档",
        },
        '/en/':{
            lang:'en-US',
            title: "Docss",
            description: "JAKA Docs",
        },
    },

    theme: "antdocs",
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        displayAllHeaders: true,
        smoothScroll: true, 
        sidebarDepth: 0,
        locales:{
            '/':{
                lastUpdated:'上次修改',
                nav: [
                    { text: "首页", link: '/' }
                ],
                sidebar: [
                    '/guide/quick_start',
                    '/guide/errinfo',
                    '/guide/modbus'
                ]
            },
            '/en/':{
                lastUpdated:'Last update',
                nav: [
                    { text: "Home", link: '/en/' }
                ],
                sidebar: [
                    '/en/guide/quick_start',
                    '/en/guide/errinfo',
                    '/en/guide/modbus'
                ]
            },
        },
    },
}