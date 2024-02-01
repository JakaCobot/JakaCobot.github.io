/*
 * @Author: JAKA
 * @Date: 2023-07-17
 * @LastEditors: 贺炳硕 hebingshuo@jaka.com
 * @LastEditTime: 2024-01-17
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
                              '/guide/addOn/1.1-AboutAddOn',
                              '/guide/addOn/1.2-AboutDev',
                            ]
                          },
                        '/guide/addOn/2-QuickStart',
                        '/guide/addOn/3-EnvironmentInstall',
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
                                        '/guide/addOn/4.2-JAKA_Service',
                                        'guide/addOn/4.1-JAKA_Command',
                                        'guide/addOn/4.3-JAKA_Web',
                                        'guide/addOn/4.4-I18n',
                                        'guide/addOn/4.5-UserGuide',
                                    ]
                                  },
                                  {
                                    title: '高级教程',   // 必要的
                                    collapsable: false, // 可选的, 默认值是 true,
                                    sidebarDepth: 1,    // 可选的, 默认值是 1
                                    children: [
                                    //   '/'
                                    ]
                                  },

                            ]
                          },
                        '/guide/addOn/5-Release',
                        {
                            title: '具体案例',   // 必要的
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                              // '/guide/addOn/6.1-DHGripper',
                              // '/guide/addOn/6.2-EwellixLiftKit',
                            ]
                          },
    
                    ], 
                        // 新增的下级页面链接
                    },
                    '/guide/SRCI/SRCI.md'

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
                                  '/en/guide/addOn/1.1-AboutAddOn',
                                  '/en/guide/addOn/1.2-AboutDev',
                                ]
                              },
                            '/en/guide/addOn/2-QuickStart',
                            '/en/guide/addOn/3-EnvironmentInstall',
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
                                          '/en/guide/addOn/4.2-JAKA_Service',
                                          '/en/guide/addOn/4.1-JAKA_Command',
                                          '/en/guide/addOn/4.3-JAKA_Web',
                                          '/en/guide/addOn/4.4-I18n',
                                          '/en/guide/addOn/4.5-UserGuide',
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
                            '/en/guide/addOn/5-Release',
                            {
                                title: 'Examples',   // 必要的
                                collapsable: false, // 可选的, 默认值是 true,
                                sidebarDepth: 1,    // 可选的, 默认值是 1
                                children: [
                                  // '/en/guide/addOn/6.1-DHGripper',
                                  // '/en/guide/addOn/6.2-EwellixLiftKit',
                                ]
                              },
                            
                        ], 
                    },
                    '/en/guide/SRCI/SRCI_en.md'
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
    head: [
        // 添加 Google Analytics 代码
        [
          "script",
          {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-X30FSCFGZS",
          },
        ],
        [
          "script",
          {},
          [
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-X30FSCFGZS');
            `,
          ],
        ],
      ],
}
