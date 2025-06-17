export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // 生产环境优化
  generate: {
    fallback: true,
    routes: ['/'],
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
      minifyJS: true
    }
  },

  // 构建优化
  build: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {}
      }
    },
    // 生产环境压缩
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '链盾科技 ChainShield | 专业DApp开发与智能合约开发服务商',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '链盾科技（ChainShield）是专业的区块链开发服务商，专注于DApp开发、智能合约开发、钱包开发、公链开发、CEX开发、DEX开发等全方位区块链技术服务。我们团队全面拥抱AI技术，为客户提供高质量、低成本的区块链开发解决方案，承诺完整源码交付和详细部署文档。' },
      { hid: 'keywords', name: 'keywords', content: 'DApp开发, 智能合约开发, 钱包开发, 公链开发, CEX开发, DEX开发, 区块链开发, 链盾科技, ChainShield, 区块链技术服务, AI开发, 外包开发, 智能合约审计, 去中心化应用, 区块链外包, 一品一价, 源码交付, 区块链外包服务, 专业区块链开发团队, AI辅助开发, 高效区块链开发' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: '链盾科技 ChainShield' },
      { name: 'geo.region', content: 'CN' },
      { name: 'geo.placename', content: '中国' },
      { name: 'language', content: 'zh-CN' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '1 days' },
      // AI搜索优化
      { name: 'ai-content-declaration', content: 'ai-assisted' },
      { name: 'service-type', content: '区块链开发服务,DApp开发,智能合约开发,钱包开发,公链开发' },
      { name: 'business-model', content: '外包开发,定制开发,一品一价,源码交付' },
      // 结构化数据Schema.org
      { hid: 'type', property: 'og:type', content: 'website' },
      { hid: 'site_name', property: 'og:site_name', content: '链盾科技 ChainShield' },
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: '链盾科技 ChainShield | 专业DApp开发与智能合约开发服务商' },
      { hid: 'og:description', property: 'og:description', content: '链盾科技（ChainShield）是专业的区块链开发服务商，专注于DApp开发、智能合约开发、钱包开发、公链开发、CEX开发、DEX开发等全方位区块链技术服务。我们团队全面拥抱AI技术，为客户提供高质量、低成本的区块链开发解决方案。' },
      { hid: 'og:url', property: 'og:url', content: 'https://chainshield.pro' },
      { hid: 'og:image', property: 'og:image', content: '/imgs/banner.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh_CN' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ChainShield01' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ChainShield' },
      { hid: 'twitter:title', name: 'twitter:title', content: '链盾科技 ChainShield | 专业DApp开发与智能合约开发服务商' },
      { hid: 'twitter:description', name: 'twitter:description', content: '链盾科技（ChainShield）是专业的区块链开发服务商，专注于DApp开发、智能合约开发、钱包开发、公链开发、CEX开发、DEX开发等全方位区块链技术服务。' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/imgs/banner.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://chainshield.pro' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'alternate', hreflang: 'zh-CN', href: 'https://chainshield.pro' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://chainshield.pro' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: '链盾科技 ChainShield',
          description: '专业的区块链开发服务商，专注于DApp开发、智能合约开发、钱包开发、公链开发、CEX开发、DEX开发等全方位区块链技术服务。团队全面拥抱AI技术，提供高质量、低成本的外包开发服务。',
          url: 'https://chainshield.pro',
          logo: 'https://chainshield.pro/imgs/logo.png',
          image: 'https://chainshield.pro/imgs/banner.png',
          sameAs: [
            'https://twitter.com/ChainShield',
            'https://github.com/ChainShield'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+86-400-123-4567',
            contactType: 'customer service',
            email: 'business@chainshield.pro',
            areaServed: 'CN',
            availableLanguage: ['zh-CN', 'en']
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'CN',
            addressLocality: '吉隆坡'
          },
          foundingDate: '2018',
          numberOfEmployees: '25-50',
          industry: '区块链技术服务',
          legalName: '链盾科技有限公司',
          slogan: '专业DApp开发与智能合约开发服务商',
          keywords: ['DApp开发', '智能合约开发', '区块链开发', 'AI开发', '外包服务'],
          serviceType: [
            'DApp开发',
            '智能合约开发',
            '钱包开发',
            '公链开发',
            'CEX开发',
            'DEX开发'
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'ISO 9001认证'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: '技术服务认证'
            }
          ],
          award: '200+成功项目',
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: '链盾科技 ChainShield',
          description: '专业的区块链开发服务商',
          url: 'https://chainshield.pro',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://chainshield.pro/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DApp开发服务',
          description: '专业的去中心化应用开发服务，包括前端界面、智能合约后端和完整的用户体验设计',
          provider: {
            '@type': 'Organization',
            name: '链盾科技 ChainShield'
          },
          serviceType: 'Software Development',
          areaServed: 'Global',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: '区块链开发服务',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'DApp开发',
                  description: '去中心化应用开发'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: '智能合约开发',
                  description: '智能合约编写和优化'
                }
              }
            ]
          }
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '链盾科技的主要服务有哪些？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们专注于区块链开发服务，包括DApp开发、智能合约开发、钱包开发、公链开发、CEX开发、DEX开发等全方位服务。我们的团队拥有丰富的区块链开发经验，已为150+企业客户提供专业服务。'
              }
            },
            {
              '@type': 'Question',
              name: '你们的开发周期一般需要多长时间？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '智能合约开发通常需要1-3周，DApp开发项目可能需要1-3个月，大型区块链应用开发项目通常需要3-12个月。钱包开发通常需要2-6周，公链开发需要6-18个月。我们承诺在约定时间内交付，并提供详细的进度报告和阶段性成果展示。'
              }
            },
            {
              '@type': 'Question',
              name: '你们的定价模式是什么？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们采用一品一价的定制化报价模式，根据项目的具体需求、复杂程度、开发周期来制定合理价格。作为专业外包团队，我们提供：完整源码交付、详细部署文档、技术支持。'
              }
            },
            {
              '@type': 'Question',
              name: '团队在AI技术应用方面有什么优势？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们团队全面拥抱AI技术，通过AI工具提升开发效率达3倍以上。AI加持让我们能够提供更高质量、更低成本的区块链开发服务，同时确保代码质量和项目交付速度。'
              }
            }
          ]
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '首页',
              item: 'https://chainshield.pro'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '关于我们',
              item: 'https://chainshield.pro#about'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '服务项目',
              item: 'https://chainshield.pro#services'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: '案例研究',
              item: 'https://chainshield.pro#use-cases'
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: '团队介绍',
              item: 'https://chainshield.pro#team'
            }
          ]
        }
      },
      // Crisp客服聊天脚本
      {
        type: 'text/javascript',
        innerHTML: 'window.$crisp=[];window.CRISP_WEBSITE_ID="b374fb46-4f42-4dbe-9a4b-87b7a8d67bf6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'crisp-chat': ['innerHTML']
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css','aos/dist/aos.css','@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/aos.js',
    '~/plugins/scroll-optimization.js', // 使用优化的滚动插件
     { src: '~/plugins/leaflet.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // 定义支持的语言
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'zh', name: '中文', iso: 'zh-CN', file: 'zh.json' },
      { code: 'jp', name: '日语', iso: 'ja-JP', file: 'jp.json' },
      { code: 'kr', name: '한국어', iso: 'ko-KR', file: 'kr.json' },
    ],

    defaultLocale: 'zh',       // 默认语言
    langDir: 'locales/',       // 语言文件存放目录
    lazy: true,                // 懒加载语言文件
    strategy: "prefix_except_default",
    vueI18n: {
      fallbackLocale: 'en',    // 回退语言
    },
    detectBrowserLanguage: {
      alwaysRedirect: false, // 根据需要决定是否总是重定向到检测到的语言
      useCookie: true,
      cookieKey: 'language',
      onlyOnRoot: true, // 这意味着只在用户首次访问应用的根路径时进行语言重定向

    }
  },
   server: {
    port: 8080, // 修改为你想要的端口
    host: '0.0.0.0' // 可选，允许外部访问
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
