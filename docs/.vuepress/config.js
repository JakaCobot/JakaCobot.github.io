/*
 * @Author: JAKA
 * @Date: 2023-07-17
 * @LastEditors: 贺炳硕 hebingshuo@jaka.com
 * @LastEditTime: 2023-09-15
 * @Description: 
 */

module.exports = {
    locales:{
        '/':{
            lang:'zh',
            title: "文档",
            description: "JAKA 文档",
        },
        '/en/':{
            lang:'en',
            title: "Docs",
            description: "JAKA Docs",
        },
        '/ja/':{
            lang:'ja',
            title: "書類",
            description: "JAKA 書類",
        },
        '/vi/':{
            lang:'vnf',
            title: "tài liệu",
            description: "JAKA tài liệu",
        },
    },
    plugins: [
        ['@vuepress/register-components', { componentsDir: './components/' }],
        ['./plugins/markdownIt', {}],
      ],
    theme: "antdocs",
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        displayAllHeaders: false,
        smoothScroll: true, 
        sidebarDepth: 0,
        sidebar: 'auto',
        locales:{
            '/':{
                lastUpdated:'上次修改',
                nav: [
                    { text: "首页", link: '/' }
                ],
                sidebar: [
                    '/guide/quick_start',
                    '/guide/errinfo',
                    '/guide/jks',
                    '/guide/bus',
                    '/guide/cmdhelp',
                    '/guide/funcIO',
                    {
                      title:'AddOn开发', 
                      collapsable: true,
                      sidebarDepth: 0,
                      children: [
                        '/guide/addOn/AddOn3.0',
                        '/guide/addOn/environment',
                        '/guide/addOn/JAKA_Command',
                        '/guide/addOn/JAKA_Serve',
                        '/guide/addOn/JAKA_web',
                    ], 
                        // 新增的下级页面链接
                    }
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
                    '/en/guide/cmdhelp',
                    '/en/guide/bus',
                    '/en/guide/funcIO',
                    {
                        title: 'AddOn Develop',
                        collapsable: true,
                        children:  [
                            '/en/guide/addOn/AddOn3.0',
                            '/en/guide/addOn/environment',
                            '/en/guide/addOn/JAKA_Command',
                            '/en/guide/addOn/JAKA_Serve',
                            '/en/guide/addOn/JAKA_web',
                        ], 
                    }
                ]
            },
            '/ja/':{
                lastUpdated:'最後の更新',
                nav: [
                    { text: "ホームページ", link: '/ja/' }
                ],
                sidebar: [
                    '/ja/guide/quick_start',
                    '/ja/guide/errinfo',
                    {
                        title: 'AddOn開発',
                        collapsable: true,
                        children:  [
                            '/ja/guide/addOn/AddOn3.0',
                            '/ja/guide/addOn/environment',
                            '/ja/guide/addOn/JAKA_Command',
                            '/ja/guide/addOn/JAKA_Serve',
                            '/ja/guide/addOn/JAKA_web',
                        ], 
                    }
                ]
            },
            '/vi/':{
                lastUpdated:'Cập nhật cuối cùng',
                nav: [
                    { text: "trang chủ", link: '/vi/' }
                ],
                sidebar: [
                    '/vi/guide/quick_start',
                    '/vi/guide/errinfo',
                ]
            },
        },
    },
}
