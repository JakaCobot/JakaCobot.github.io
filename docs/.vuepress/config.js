/*
 * @Author: JAKA
 * @Date: 2023-07-17
 * @LastEditors: brycen hebingshuo@jaka.com
 * @LastEditTime: 2023-11-06
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
                // 多语言下拉菜单的标题
                selectText: 'Languages|语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
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
                        {
                            title: '基本介绍',   // 必要的
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                              '/guide/addOn/aboutaddOn',
                              '/guide/addOn/aboutdoc',
                            ]
                          },
                        '/guide/addOn/QuickStart',
                        '/guide/addOn/environment',
                        {
                            title: '开发',   // 必要的
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                                {
                                    title: '入门教程',   // 必要的
                                    collapsable: true, // 可选的, 默认值是 true,
                                    sidebarDepth: 1,    // 可选的, 默认值是 1
                                    children: [
                                        '/guide/addOn/JAKA_Command',
                                        'guide/addOn/JAKA_Serve',
                                        'guide/addOn/JAKA_Web',
                                        'guide/addOn/multi-language',
                                        'guide/addOn/userguide',
                                    ]
                                  },
                                'guide/addOn/advanced',

                            ]
                          },
                        '/guide/addOn/release',
                        {
                            title: '具体案例',   // 必要的
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                              '/guide/addOn/demo_LiftKit',
                              '/guide/addOn/demo_DHGripper',
                            ]
                          },
    
                    ], 
                        // 新增的下级页面链接
                    }
                ]
            },
            '/en/':{
                selectText: '语言|Languages',
                label: 'English',
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
                        title: 'AddOn Development',
                        collapsable: true,
                        children: [
                            {
                                title: 'Introduction',   // 必要的
                                collapsable: true, // 可选的, 默认值是 true,
                                sidebarDepth: 1,    // 可选的, 默认值是 1
                                children: [
                                  '/en/guide/addOn/aboutaddOn',
                                  '/en/guide/addOn/aboutdoc',
                                ]
                              },
                            '/en/guide/addOn/QuickStart',
                            '/en/guide/addOn/environment',
                            {
                                title: 'Let Us Develop',   // 必要的
                                collapsable: true, // 可选的, 默认值是 true,
                                sidebarDepth: 1,    // 可选的, 默认值是 1
                                children: [
                                    {
                                        title: 'Elementary',   // 必要的
                                        collapsable: true, // 可选的, 默认值是 true,
                                        sidebarDepth: 1,    // 可选的, 默认值是 1
                                        children: [
                                          '/en/guide/addOn/JAKA_Command',
                                          '/en/guide/addOn/JAKA_Serve',
                                          '/en/guide/addOn/JAKA_Web',
                                          '/en/guide/addOn/multi-language',
                                          '/en/guide/addOn/userguide',
                                        ]
                                      },
                                      {
                                        title: 'Advanced',   // 必要的
                                        collapsable: false, // 可选的, 默认值是 true,
                                        sidebarDepth: 1,    // 可选的, 默认值是 1
                                        children: [
                                        //   '/'
                                        ]
                                      },
                                ]
                              },
                            '/en/guide/addOn/release',
                            {
                                title: 'Examples',   // 必要的
                                collapsable: false, // 可选的, 默认值是 true,
                                sidebarDepth: 1,    // 可选的, 默认值是 1
                                children: [
                                  '/en/guide/addOn/demo_LiftKit',
                                  '/en/guide/addOn/demo_DHGripper',
                                ]
                              },
                            
                        ], 
                    }
                ]
            },
            '/ja/':{
                selectText: '言語|Languages',
                label: '日本語',
                lastUpdated:'最後の更新',
                nav: [
                    { text: "ホームページ", link: '/ja/' }
                ],
                sidebar: [
                    '/ja/guide/quick_start',
                    '/ja/guide/errinfo',
                    // {
                    //     title: 'AddOn開発',
                    //     collapsable: true,
                    //     children:  [
                    //         '/ja/guide/addOn/AddOn3.0',
                    //         '/ja/guide/addOn/environment',
                    //         '/ja/guide/addOn/JAKA_Command',
                    //         '/ja/guide/addOn/JAKA_Serve',
                    //         '/ja/guide/addOn/JAKA_web',
                    //     ], 
                    // }
                ]
            },
            '/vi/':{
                selectText: 'Ngôn ngữ|Languages',
                label: 'Tiếng Việt',
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
