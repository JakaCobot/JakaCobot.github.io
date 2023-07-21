/*
 * @Author: 贺炳硕 hebingshuo@jaka.com
 * @Date: 2023-07-17
 * @LastEditors: 贺炳硕 hebingshuo@jaka.com
 * @LastEditTime: 2023-07-17
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
        '/jp/':{
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
        displayAllHeaders: true,
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
                      children: ['/guide/addOn/evn','/guide/addOn/customerCMD','/guide/addOn/addOnTool'], // 新增的下级页面链接
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
                    '/en/guide/funcIO',
                    {
                        title: 'AddOn开发',
                        collapsable: true,
                        children: ['/guide/addOn/evn','/guide/addOn/customerCMD' ], // 新增的下级页面链接
                    }
                ]
            },
            '/jp/':{
                lastUpdated:'最後の更新',
                nav: [
                    { text: "ホームページ", link: '/jp/' }
                ],
                sidebar: [
                    '/jp/guide/quick_start',
                    '/jp/guide/errinfo',
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