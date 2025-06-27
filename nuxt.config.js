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
    title: 'DApp开发_智能合约开发_区块链开发外包服务商 | 链盾科技ChainShield',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '链盾科技专业提供DApp开发、智能合约开发服务，6年专注区块链开发，已为150+企业完成200+DApp项目。提供完整源码交付，AI加持开发效率提升3倍，一品一价透明报价。专业DApp开发团队，智能合约安全审计，7x24技术支持。' },
      { hid: 'keywords', name: 'keywords', content: 'DApp开发, 智能合约开发, DApp开发公司, 智能合约开发团队, 去中心化应用开发, Solidity开发, 以太坊DApp开发, BSC智能合约, Polygon DApp, DeFi开发, NFT开发, 区块链开发外包, 智能合约审计, Web3开发, 区块链应用开发, 链盾科技, ChainShield' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: '链盾科技 ChainShield DApp开发团队' },
      { name: 'geo.region', content: 'CN' },
      { name: 'geo.placename', content: '中国' },
      { name: 'language', content: 'zh-CN' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '1 days' },
      // 核心业务SEO优化
      { name: 'primary-service', content: 'DApp开发,智能合约开发' },
      { name: 'service-area', content: '以太坊,BSC,Polygon,Arbitrum,Optimism,Solana' },
      { name: 'development-languages', content: 'Solidity,Rust,JavaScript,TypeScript,Python' },
      { name: 'project-types', content: 'DeFi,NFT,GameFi,DAO,DEX,钱包,公链' },
      // AI搜索优化
      { name: 'ai-content-declaration', content: 'ai-assisted' },
      { name: 'service-type', content: 'DApp开发服务,智能合约开发服务,区块链开发外包' },
      { name: 'business-model', content: 'DApp定制开发,智能合约外包,源码交付,技术支持' },
      // 结构化数据Schema.org
      { hid: 'type', property: 'og:type', content: 'website' },
      { hid: 'site_name', property: 'og:site_name', content: '链盾科技 ChainShield DApp开发' },
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: 'DApp开发_智能合约开发_专业区块链开发团队 | 链盾科技' },
      { hid: 'og:description', property: 'og:description', content: '链盾科技专业DApp开发团队，6年专注智能合约开发，已完成200+区块链项目。提供以太坊、BSC、Polygon等多链DApp开发服务，AI加持效率提升3倍，完整源码交付。' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.chainshield.pro' },
      { hid: 'og:image', property: 'og:image', content: '/imgs/banner.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh_CN' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ChainShield01' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ChainShield' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'DApp开发_智能合约开发专家 | 链盾科技ChainShield' },
      { hid: 'twitter:description', name: 'twitter:description', content: '专业DApp开发团队，智能合约开发专家，6年区块链开发经验，200+成功项目案例。' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/imgs/banner.png' }
    ],
    link: [
      // Favicon 配置 - 多格式支持
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      // 其他链接
      { rel: 'canonical', href: 'https://www.chainshield.pro' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'alternate', hreflang: 'zh-CN', href: 'https://www.chainshield.pro' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://www.chainshield.pro' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: '链盾科技 ChainShield - 专业DApp开发团队',
          description: '链盾科技是专业的DApp开发和智能合约开发服务商，6年专注区块链开发，已为150+企业完成200+DApp项目。提供以太坊、BSC、Polygon等多链开发服务，AI加持开发效率提升3倍。',
          url: 'https://www.chainshield.pro',
          logo: 'https://www.chainshield.pro/imgs/logo.png',
          image: 'https://www.chainshield.pro/imgs/banner.png',
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
          industry: 'DApp开发服务,智能合约开发',
          legalName: '链盾科技有限公司',
          slogan: '专业DApp开发与智能合约开发专家',
          keywords: ['DApp开发', '智能合约开发', '以太坊开发', 'BSC开发', 'Solidity开发', 'Web3开发', 'DeFi开发', 'NFT开发'],
          serviceType: [
            'DApp开发',
            '智能合约开发',
            'DeFi协议开发',
            'NFT平台开发',
            'DAO治理开发',
            'DEX交易所开发',
            '区块链钱包开发',
            '智能合约审计'
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Solidity专家认证'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: '区块链安全审计认证'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'ISO 9001质量认证'
            }
          ],
          award: '200+DApp开发项目成功案例',
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'DApp开发服务',
                description: '专业的去中心化应用开发，支持以太坊、BSC、Polygon等多链'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '智能合约开发服务',
                description: 'Solidity智能合约开发，包含安全审计和部署服务'
              }
            }
          ]
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DApp开发_智能合约开发 | 链盾科技ChainShield',
          description: '专业的DApp开发和智能合约开发服务平台，提供以太坊、BSC、Polygon等多链开发服务',
          url: 'https://www.chainshield.pro',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.chainshield.pro/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          about: [
            {
              '@type': 'Thing',
              name: 'DApp开发',
              description: '去中心化应用开发服务'
            },
            {
              '@type': 'Thing',
              name: '智能合约开发',
              description: 'Solidity智能合约编程服务'
            }
          ]
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DApp开发服务',
          description: '专业的去中心化应用(DApp)开发服务，支持以太坊、BSC、Polygon、Arbitrum等多链，提供前端界面、智能合约后端和完整的用户体验设计',
          provider: {
            '@type': 'Organization',
            name: '链盾科技 ChainShield',
            url: 'https://www.chainshield.pro'
          },
          serviceType: 'DApp Development',
          areaServed: 'Global',
          category: '区块链开发服务',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'DApp开发服务目录',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'DeFi DApp开发',
                  description: '去中心化金融应用开发，包含流动性挖矿、借贷协议、DEX等'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'NFT平台开发',
                  description: 'NFT铸造、交易、市场平台开发'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'GameFi游戏开发',
                  description: '区块链游戏和GameFi项目开发'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'DAO治理开发',
                  description: '去中心化自治组织治理系统开发'
                }
              }
            ]
          }
        }
      },
      // 智能合约开发专门的结构化数据
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '智能合约开发服务',
          description: '专业的Solidity智能合约开发服务，包含ERC-20、ERC-721、ERC-1155等标准合约开发，提供安全审计和部署服务',
          provider: {
            '@type': 'Organization',
            name: '链盾科技 ChainShield',
            url: 'https://www.chainshield.pro'
          },
          serviceType: 'Smart Contract Development',
          areaServed: 'Global',
          category: '智能合约开发',
          offers: [
            {
              '@type': 'Offer',
              name: 'ERC-20代币合约开发',
              description: '标准代币智能合约开发和部署'
            },
            {
              '@type': 'Offer',
              name: 'ERC-721 NFT合约开发',
              description: 'NFT智能合约开发和铸造功能'
            },
            {
              '@type': 'Offer',
              name: 'DeFi协议合约开发',
              description: '流动性挖矿、借贷、交易等DeFi合约'
            },
            {
              '@type': 'Offer',
              name: '智能合约安全审计',
              description: '专业的智能合约安全漏洞检测和审计'
            }
          ]
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
              name: '链盾科技的DApp开发和智能合约开发服务有哪些？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们专注于DApp开发和智能合约开发服务，包括DeFi协议开发、NFT平台开发、GameFi游戏开发、DAO治理开发、DEX交易所开发等。支持以太坊、BSC、Polygon、Arbitrum等多链开发，已为150+企业完成200+DApp项目。'
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
              item: 'https://www.chainshield.pro'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '关于我们',
              item: 'https://www.chainshield.pro#about'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '服务项目',
              item: 'https://www.chainshield.pro#services'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: '案例研究',
              item: 'https://www.chainshield.pro#use-cases'
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: '团队介绍',
              item: 'https://www.chainshield.pro#team'
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
  modules: [],
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
