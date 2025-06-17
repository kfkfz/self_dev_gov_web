<template>
  <div class="bg-[#131717] min-h-screen flex flex-col text-white relative">
    <!-- 新的粒子网络背景 -->
    <BackgroundDecorations />

    <!-- header -->
    <nav
      class="w-full h-[65px] flex flex-row items-center justify-between px-[20px] lg:px-[40px] box-border border-b-[1px] border-solid border-[#E5E8EB] sticky top-0 z-50 transition-all duration-300"
      :class="
        scrollY > 100
          ? 'bg-[#0F1313] backdrop-blur-md shadow-lg h-[60px]'
          : 'bg-[#131717]'
      "
    >
      <img
        src="/imgs/logo.svg"
        alt="链盾科技 - ChainShield Logo"
        class="w-[120px] h-[23px] transition-all duration-300"
        :class="scrollY > 100 ? 'w-[100px] h-[19px]' : 'w-[120px] h-[23px]'"
      />

      <!-- Desktop Navigation -->
      <div
        class="hidden lg:flex flex-row items-center text-white text-[14px] font-[500]"
      >
        <a
          href="#about"
          class="hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>关于我们</div>
        </a>
        <a
          href="#services"
          class="ml-[54px] hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>服务项目</div>
        </a>
        <a
          href="#use-cases"
          class="ml-[54px] hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>案例研究</div>
        </a>
        <a
          href="#team"
          class="ml-[54px] hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>团队介绍</div>
        </a>
        <a
          href="#roadmap"
          class="ml-[54px] hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>发展历程</div>
        </a>
        <a
          href="#faq"
          class="ml-[54px] hover:text-[#9CB2BA] transition-colors duration-300"
        >
          <div>常见问题</div>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden flex flex-col justify-center items-center w-[30px] h-[20px]"
      >
        <span
          class="block w-full h-[2px] bg-white mb-[3px] transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[5px]': mobileMenuOpen }"
        ></span>
        <span
          class="block w-full h-[2px] bg-white mb-[3px] transition-all duration-300"
          :class="{ 'opacity-0': mobileMenuOpen }"
        ></span>
        <span
          class="block w-full h-[2px] bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[5px]': mobileMenuOpen }"
        ></span>
      </button>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="absolute top-[65px] left-0 w-full bg-[#131717] border-b border-[#E5E8EB] lg:hidden"
      >
        <div
          class="flex flex-col py-[20px] px-[20px] space-y-[20px] text-[16px]"
        >
          <a
            href="#about"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >关于我们</a
          >
          <a
            href="#services"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >服务项目</a
          >
          <a
            href="#use-cases"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >案例研究</a
          >
          <a
            href="#team"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >团队介绍</a
          >
          <a
            href="#roadmap"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >发展历程</a
          >
          <a
            href="#faq"
            @click="closeMobileMenu"
            class="hover:text-[#9CB2BA] transition-colors duration-300"
            >常见问题</a
          >
        </div>
      </div>
    </nav>

    <!-- 全屏 banner -->
    <div class="banner text-center w-full relative z-10">
      <div class="pt-[160px] lg:pt-[240px] pb-[60px] lg:pb-[80px] px-[20px] h-full flex flex-col justify-center">
        <h1
          class="text-[36px] lg:text-[56px] xl:text-[64px] font-bold mb-[20px] gradient-text drop-shadow-lg"
        >
          链盾科技·专业DApp开发
        </h1>

        <h2
          class="text-[16px] lg:text-[20px] xl:text-[22px] max-w-[800px] mx-auto leading-relaxed text-shadow-lg mb-[8px]"
        >
          DApp开发 | 智能合约开发 | 钱包开发 | 公链开发<br
            class="hidden sm:block"
          />
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] max-w-[600px] mx-auto mb-[20px]"
        >
          已为150+客户提供专业的区块链开发服务 | 累计开发项目超过200个
        </div>

        <!-- AI优势突出显示 -->
        <div
          class="text-[16px] lg:text-[18px] text-[#4facfe] max-w-[800px] mx-auto mb-[20px] font-semibold"
        >
          🤖 团队全面拥抱AI · 借助AI快速开发 · 高效率低成本
        </div>

        <!-- 新增认证标识 -->
        <div
          class="flex flex-wrap justify-center gap-[16px] mb-[24px] text-[12px] text-[#7A8B8F]"
        >
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[20px] px-[12px] py-[6px]"
          >
            🏆 ISO 9001认证
          </div>
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[20px] px-[12px] py-[6px]"
          >
            🔧 技术服务认证
          </div>
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[20px] px-[12px] py-[6px]"
          >
            ⭐ 200+成功项目
          </div>
        </div>

        <div
          class="mt-[30px] lg:mt-[40px] flex flex-col sm:flex-row gap-[16px] justify-center items-center"
        >
          <button
            class="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white px-[40px] py-[16px] lg:px-[48px] lg:py-[18px] rounded-[35px] font-bold text-[18px] lg:text-[20px] hover:shadow-2xl hover:scale-105 transition-all duration-300 transform shadow-lg"
            @click="openCrispChat"
          >
            免费获取方案
          </button>
        </div>
      </div>
    </div>

    <!-- main content -->
    <div
      class="w-full max-w-[1200px] mx-auto px-[20px] lg:px-[40px] flex flex-col items-center main-container"
    >
      <div class="text-[13px] text-[#9CB2BA] text-left w-full mt-[12px]">
        通过权威技术服务机构认证
      </div>

      <!-- trust -->
      <div class="w-full mt-[80px] lg:mt-[100px]">
        <div
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          开发者与企业的信赖之选
        </div>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[40px] lg:mb-[50px] text-center lg:text-left"
        >
          我们为全球企业提供专业的区块链开发解决方案，获得业界广泛认可
        </div>

        <!-- 服务统计数据 -->
        <div
          class="grid grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[40px] lg:mb-[50px]"
        >
          <div
            class="text-center p-[20px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px]"
          >
            <div class="text-[24px] lg:text-[32px] font-bold text-[#4facfe]">
              200+
            </div>
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA] mt-[4px]">
              开发项目
            </div>
          </div>
          <div
            class="text-center p-[20px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px]"
          >
            <div class="text-[24px] lg:text-[32px] font-bold text-[#00f2fe]">
              150+
            </div>
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA] mt-[4px]">
              企业客户
            </div>
          </div>
          <div
            class="text-center p-[20px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px]"
          >
            <div class="text-[24px] lg:text-[32px] font-bold text-[#4facfe]">
              24/7
            </div>
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA] mt-[4px]">
              技术支持
            </div>
          </div>
          <div
            class="text-center p-[20px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px]"
          >
            <div class="text-[24px] lg:text-[32px] font-bold text-[#00f2fe]">
              5+
            </div>
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA] mt-[4px]">
              服务年限
            </div>
          </div>
        </div>

        <!-- 合作伙伴展示 -->
        <div
          class="text-[16px] lg:text-[18px] font-semibold text-center mb-[30px] text-[#9CB2BA]"
        >
          信任我们的知名合作伙伴
        </div>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px] mt-[30px] lg:mt-[40px]"
        >
          <div class="text-center">
            <img
              class="w-[80px] h-[80px] lg:w-[128px] lg:h-[128px] mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/imgs/trust1.png"
              alt="区块链技术合作伙伴 - 科技公司Logo"
            />
            <div
              class="font-[500] text-[14px] lg:text-[16px] mt-[12px] lg:mt-[16px] text-center"
            >
              科技公司
            </div>
          </div>
          <div class="text-center">
            <img
              class="w-[80px] h-[80px] lg:w-[128px] lg:h-[128px] mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/imgs/trust2.png"
              alt="区块链创新实验室合作伙伴Logo"
            />
            <div
              class="font-[500] text-[14px] lg:text-[16px] mt-[12px] lg:mt-[16px] text-center"
            >
              创新实验室
            </div>
          </div>
          <div class="text-center">
            <img
              class="w-[80px] h-[80px] lg:w-[128px] lg:h-[128px] mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/imgs/trust3.png"
              alt="加密货币投资机构合作伙伴Logo"
            />
            <div
              class="font-[500] text-[14px] lg:text-[16px] mt-[12px] lg:mt-[16px] text-center"
            >
              加密投资
            </div>
          </div>
          <div class="text-center">
            <img
              class="w-[80px] h-[80px] lg:w-[128px] lg:h-[128px] mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/imgs/trust4.png"
              alt="区块链底层技术服务商Logo"
            />
            <div
              class="font-[500] text-[14px] lg:text-[16px] mt-[12px] lg:mt-[16px] text-center"
            >
              区块链技术
            </div>
          </div>
          <div class="text-center col-span-2 md:col-span-1">
            <img
              class="w-[80px] h-[80px] lg:w-[128px] lg:h-[128px] mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/imgs/trust5.png"
              alt="链盾科技技术服务机构合作伙伴Logo"
            />
            <div
              class="font-[500] text-[14px] lg:text-[16px] mt-[12px] lg:mt-[16px] text-center"
            >
              安全链
            </div>
          </div>
        </div>
      </div>

      <!-- 新增：为什么选择我们 -->
      <div class="w-full mt-[100px] lg:mt-[120px]">
        <h2 class="text-[22px] lg:text-[28px] font-bold text-center mb-[20px]">
          为什么选择链盾科技？
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[40px] lg:mb-[50px] text-center max-w-[800px] mx-auto"
        >
          我们不仅是技术提供商，更是您数字化转型路上的可靠伙伴
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[50px]"
        >
          <AnimatedCard animation-type="glow" variant="primary">
            <div class="text-center p-[20px]">
              <div
                class="w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[16px]"
              >
                <span class="text-[24px]">🛡️</span>
              </div>
              <div class="text-[16px] font-bold mb-[8px]">质量第一</div>
              <div class="text-[12px] text-[#9CB2BA]">
                99.9%质量记录<br />零重大质量事故
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="particles" variant="secondary">
            <div class="text-center p-[20px]">
              <div
                class="w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[16px]"
              >
                <span class="text-[24px]">⚡</span>
              </div>
              <div class="text-[16px] font-bold mb-[8px]">快速交付</div>
              <div class="text-[12px] text-[#9CB2BA]">
                平均2周完成开发<br />30天上线产品
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="wave" variant="accent">
            <div class="text-center p-[20px]">
              <div
                class="w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[16px]"
              >
                <span class="text-[24px]">🏅</span>
              </div>
              <div class="text-[16px] font-bold mb-[8px]">专业认证</div>
              <div class="text-[12px] text-[#9CB2BA]">
                技术服务认证<br />行业资质齐全
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="tech" variant="default">
            <div class="text-center p-[20px]">
              <div
                class="w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[16px]"
              >
                <span class="text-[24px]">🎯</span>
              </div>
              <div class="text-[16px] font-bold mb-[8px]">定制方案</div>
              <div class="text-[12px] text-[#9CB2BA]">
                一对一专家服务<br />量身定制解决方案
              </div>
            </div>
          </AnimatedCard>
        </div>

        <!-- 客户成功案例数据 -->
        <div
          class="bg-gradient-to-r from-[#1A1F1F] to-[#252A2A] border border-[#3B4F54] rounded-[12px] p-[40px] text-center"
        >
          <div class="text-[20px] font-bold mb-[30px] text-[#4facfe]">
            客户成功案例
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <div>
              <div class="text-[24px] font-bold text-[#00f2fe] mb-[8px]">
                平均节省60%
              </div>
              <div class="text-[14px] text-[#9CB2BA]">开发成本</div>
            </div>
            <div>
              <div class="text-[24px] font-bold text-[#4facfe] mb-[8px]">
                提升90%
              </div>
              <div class="text-[14px] text-[#9CB2BA]">系统性能</div>
            </div>
            <div>
              <div class="text-[24px] font-bold text-[#00f2fe] mb-[8px]">
                减少95%
              </div>
              <div class="text-[14px] text-[#9CB2BA]">开发周期</div>
            </div>
          </div>
        </div>
      </div>

      <!-- about -->
      <div id="about" class="w-full mt-[100px] lg:mt-[120px]">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          关于我们
        </h2>
        <div
          class="text-[14px] lg:text-[16px] mt-[16px] lg:mt-[20px] leading-[22px] lg:leading-[24px] mb-[40px]"
        >
          链盾科技（ChainShield）是领先的区块链开发服务提供商，专注于为企业和项目方提供DApp开发、智能合约开发等专业服务。我们的专家团队将深厚的技术知识与创新理念相结合，为每个客户提供量身定制的区块链开发方案，助力项目成功落地。
        </div>

        <!-- 使命愿景 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[40px]">
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[30px]"
          >
            <div class="text-[20px] font-bold mb-[16px] text-[#4facfe]">
              我们的使命
            </div>
            <div
              class="text-[14px] lg:text-[16px] text-[#9CB2BA] leading-[24px]"
            >
              作为专业的区块链开发外包团队，我们全面拥抱AI技术，通过AI工具提升开发效率，为客户提供高质量、低成本的DApp开发、智能合约开发等服务。我们承诺完整源码交付，详细部署文档，推动区块链技术的普及应用。
            </div>
          </div>
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[30px]"
          >
            <div class="text-[20px] font-bold mb-[16px] text-[#00f2fe]">
              我们的愿景
            </div>
            <div
              class="text-[14px] lg:text-[16px] text-[#9CB2BA] leading-[24px]"
            >
              成为全球最专业的区块链开发服务商，为各行业提供优质的区块链技术解决方案，构建更加高效、创新的数字化生态系统。
            </div>
          </div>
        </div>

        <!-- 团队优势 -->
        <div class="my-[40px]">
          <AnimatedCard animation-type="tech" variant="primary" size="lg">
            <div class="p-[30px]">
              <div class="text-center mb-[20px]">
                <div class="text-[24px] font-bold mb-[8px]">团队核心优势</div>
                <div class="text-[14px] text-[#9CB2BA]">
                  专业外包团队 · AI赋能开发 · 灵活交付
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                <div class="text-center p-[20px] bg-[#131717] rounded-[8px]">
                  <div
                    class="text-[16px] font-semibold mb-[8px] text-[#4facfe]"
                  >
                    AI加持
                  </div>
                  <div class="text-[12px] text-[#9CB2BA]">
                    团队全面拥抱AI工具<br />开发效率提升3倍
                  </div>
                </div>
                <div class="text-center p-[20px] bg-[#131717] rounded-[8px]">
                  <div
                    class="text-[16px] font-semibold mb-[8px] text-[#00f2fe]"
                  >
                    成本优势
                  </div>
                  <div class="text-[12px] text-[#9CB2BA]">
                    费用低廉<br />一品一价定制
                  </div>
                </div>
                <div class="text-center p-[20px] bg-[#131717] rounded-[8px]">
                  <div
                    class="text-[16px] font-semibold mb-[8px] text-[#4facfe]"
                  >
                    完整交付
                  </div>
                  <div class="text-[12px] text-[#9CB2BA]">
                    源码+部署文档<br />完整技术方案
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        <!-- 核心优势 -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[30px] lg:mt-[40px]"
        >
          <AnimatedCard animation-type="glow" variant="default">
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA]">
              成功实施项目
            </div>
            <div
              class="text-[20px] lg:text-[24px] font-bold mt-[6px] lg:mt-[8px]"
            >
              150+
            </div>
            <div class="text-[10px] lg:text-[12px] text-[#9CB2BA] mt-[4px]">
              涵盖金融、供应链、游戏等领域
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="particles" variant="secondary">
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA]">
              活跃客户
            </div>
            <div
              class="text-[20px] lg:text-[24px] font-bold mt-[6px] lg:mt-[8px]"
            >
              75+
            </div>
            <div class="text-[10px] lg:text-[12px] text-[#9CB2BA] mt-[4px]">
              全球企业客户信赖之选
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="wave" variant="accent">
            <div class="text-[12px] lg:text-[14px] text-[#9CB2BA]">
              服务年限
            </div>
            <div
              class="text-[20px] lg:text-[24px] font-bold mt-[6px] lg:mt-[8px]"
            >
              5+
            </div>
            <div class="text-[10px] lg:text-[12px] text-[#9CB2BA] mt-[4px]">
              深耕区块链技术服务
            </div>
          </AnimatedCard>
        </div>
      </div>

      <!-- our service -->
      <div id="services" class="w-full mt-[100px] lg:mt-[120px]">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          专业服务方案
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[40px] lg:mb-[50px] text-center lg:text-left"
        >
          从概念设计到项目上线，一站式区块链开发解决方案
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[30px]">
          <AnimatedCard animation-type="tech" variant="primary" size="lg">
            <h3 class="text-[18px] font-bold mb-[12px]">DApp开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              专业的去中心化应用开发，包括前端界面、智能合约后端和完整的用户体验设计。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service1.png"
              alt="DApp去中心化应用开发服务 - 前端后端全栈开发"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#4facfe]">
                🌐 前端开发 | ⚡ 智能合约 | 🎨 UI/UX设计
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="glow" variant="secondary" size="lg">
            <h3 class="text-[18px] font-bold mb-[12px]">智能合约开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              安全高效的智能合约开发服务，支持多链部署，确保代码质量和安全性。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service2.png"
              alt="智能合约开发服务 - 多链安全合约"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#00f2fe]">
                🔗 多链支持 | 🛡️ 安全编码 | 📋 代码优化
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="wave" variant="accent" size="lg">
            <h3 class="text-[18px] font-bold mb-[12px]">钱包开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              定制化数字钱包开发，支持多币种管理、DeFi集成和安全存储功能。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service3.png"
              alt="数字钱包开发服务 - 多币种安全钱包"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#4facfe]">
                💰 多币种 | 🔐 安全存储 | 🔄 DeFi集成
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="geometric" variant="primary" size="lg">
            <h3 class="text-[18px] font-bold mb-[12px]">公链开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              从零开始构建自主公链，包括共识机制设计、节点架构和生态系统开发。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service4.png"
              alt="公链开发服务 - 自主区块链网络"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#00f2fe]">
                ⛓️ 共识机制 | 🌐 节点网络 | 🚀 生态建设
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            animation-type="particles"
            variant="secondary"
            size="lg"
          >
            <h3 class="text-[18px] font-bold mb-[12px]">CEX开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              中心化交易所开发，包括交易引擎、用户管理、风控系统和多币种支持。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service5.png"
              alt="中心化交易所CEX开发服务 - 交易平台系统"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#4facfe]">
                🏢 交易引擎 | 👥 用户系统 | 🛡️ 风控管理
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="glow" variant="accent" size="lg">
            <h3 class="text-[18px] font-bold mb-[12px]">DEX开发</h3>
            <div class="text-[#9CB2BA] text-[14px] mb-[20px]">
              去中心化交易所开发，自动做市商(AMM)机制，流动性挖矿和治理代币系统。
            </div>
            <img
              class="w-full h-[171px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/service6.png"
              alt="去中心化交易所DEX开发服务 - AMM流动性协议"
            />
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#00f2fe]">
                🔄 AMM机制 | 💧 流动性池 | 🗳️ 治理代币
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>

      <!-- use case -->
      <div id="use-cases" class="w-full mt-[100px] lg:mt-[120px]">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          应用案例与研究
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[40px] lg:mb-[50px] text-center lg:text-left"
        >
          真实项目案例展示我们的专业能力和创新成果
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[30px] lg:mt-[40px]"
        >
          <AnimatedCard animation-type="tech" variant="primary">
            <img
              class="w-full h-[169px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/case1.png"
              alt="区块链支付系统案例 - 全球电商平台安全支付解决方案"
            />
            <div class="text-[18px] font-bold mb-[8px]">区块链支付系统</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[16px]">
              为全球电商平台开发的安全支付解决方案，处理数百万笔交易且零停机时间。
            </div>
            <div class="bg-[#131717] rounded-[6px] p-[12px] mb-[16px]">
              <div class="text-[12px] text-[#4facfe] mb-[4px]">客户评价</div>
              <div class="text-[12px] text-[#9CB2BA]">
                "极大提升了我们的支付安全性和处理效率"
              </div>
              <div class="text-[10px] text-[#7A8B8F] mt-[4px]">
                - 某大型电商平台CTO
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#4facfe]">💰 处理量: 500万+笔</div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="wave" variant="secondary">
            <img
              class="w-full h-[169px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/case2.png"
              alt="DeFi借贷平台案例 - 去中心化金融借贷协议"
            />
            <div class="text-[18px] font-bold mb-[8px]">DeFi 借贷平台</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[16px]">
              处理超过5000万美元交易的去中心化金融解决方案，具备自动化收益优化功能。
            </div>
            <div class="bg-[#131717] rounded-[6px] p-[12px] mb-[16px]">
              <div class="text-[12px] text-[#00f2fe] mb-[4px]">客户评价</div>
              <div class="text-[12px] text-[#9CB2BA]">
                "创新的DeFi解决方案为我们带来了巨大收益"
              </div>
              <div class="text-[10px] text-[#7A8B8F] mt-[4px]">
                - 加密投资基金创始人
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#00f2fe]">📈 TVL: $50M+</div>
            </div>
          </AnimatedCard>

          <AnimatedCard animation-type="geometric" variant="accent">
            <img
              class="w-full h-[169px] rounded-[8px] object-cover mb-[16px]"
              src="/imgs/case3.png"
              alt="房地产代币化案例 - 数字资产代币化解决方案"
            />
            <div class="text-[18px] font-bold mb-[8px]">房地产代币化</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[16px]">
              价值超过1亿美元的代币化房地产投资组合，实现分数所有权和增强流动性。
            </div>
            <div class="bg-[#131717] rounded-[6px] p-[12px] mb-[16px]">
              <div class="text-[12px] text-[#4facfe] mb-[4px]">客户评价</div>
              <div class="text-[12px] text-[#9CB2BA]">
                "革命性的房地产投资模式，降低了投资门槛"
              </div>
              <div class="text-[10px] text-[#7A8B8F] mt-[4px]">
                - 房地产投资集团CEO
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="text-[12px] text-[#4facfe]">🏢 资产值: $100M+</div>
            </div>
          </AnimatedCard>
        </div>

        <!-- 案例数据统计 -->
        <div
          class="mt-[50px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[30px]"
        >
          <div class="text-[20px] font-bold text-center mb-[30px]">
            项目成果数据
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <div class="text-center">
              <div class="text-[24px] font-bold text-[#4facfe]">$650M+</div>
              <div class="text-[12px] text-[#9CB2BA] mt-[4px]">总交易价值</div>
            </div>
            <div class="text-center">
              <div class="text-[24px] font-bold text-[#00f2fe]">99.9%</div>
              <div class="text-[12px] text-[#9CB2BA] mt-[4px]">系统稳定性</div>
            </div>
            <div class="text-center">
              <div class="text-[24px] font-bold text-[#4facfe]">24/7</div>
              <div class="text-[12px] text-[#9CB2BA] mt-[4px]">技术支持</div>
            </div>
            <div class="text-center">
              <div class="text-[24px] font-bold text-[#00f2fe]">100%</div>
              <div class="text-[12px] text-[#9CB2BA] mt-[4px]">客户满意度</div>
            </div>
          </div>
        </div>
      </div>

      <!-- team -->
      <div id="team" class="w-full mt-[100px] lg:mt-[120px]">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          认识我们的团队
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mt-[12px] text-center lg:text-left max-w-[600px] mb-[40px]"
        >
          我们经验丰富的区块链专家团队汇聚了数十年的密码学、软件开发和商业策略经验。
        </div>

        <!-- 核心团队 -->
        <div class="mb-[50px]">
          <div class="text-[18px] font-semibold mb-[24px] text-[#4facfe]">
            核心团队
          </div>
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[30px] text-center"
          >
            <AnimatedCard animation-type="glow" variant="primary">
              <img
                class="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto rounded-full object-cover mb-[16px]"
                src="/imgs/team1.png"
                alt="马总 - 链盾科技CEO兼创始人头像"
              />
              <div class="font-[500] text-[14px] lg:text-[16px]">马总</div>
              <div class="text-[#9CB2BA] text-[12px] lg:text-[14px] mb-[12px]">
                首席执行官兼创始人
              </div>
              <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] mb-[12px]">
                15年区块链开发经验 | 技术与商业战略专家
              </div>
              <div class="text-center">
                <div class="text-[10px] text-[#4facfe] font-semibold">
                  战略规划 · 团队管理
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation-type="particles" variant="secondary">
              <img
                class="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto rounded-full object-cover mb-[16px]"
                src="/imgs/team2.png"
                alt="李工 - 链盾科技CTO头像"
              />
              <div class="font-[500] text-[14px] lg:text-[16px]">李工</div>
              <div class="text-[#9CB2BA] text-[12px] lg:text-[14px] mb-[12px]">
                首席技术官
              </div>
              <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] mb-[12px]">
                区块链技术专家 | 智能合约架构师
              </div>
              <div class="text-center">
                <div class="text-[10px] text-[#00f2fe] font-semibold">
                  技术架构 · 智能合约
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation-type="wave" variant="accent">
              <img
                class="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto rounded-full object-cover mb-[16px]"
                src="/imgs/team3.png"
                alt="张工 - 链盾科技安全主管头像"
              />
              <div class="font-[500] text-[14px] lg:text-[16px]">张工</div>
              <div class="text-[#9CB2BA] text-[12px] lg:text-[14px] mb-[12px]">
                安全主管
              </div>
              <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] mb-[12px]">
                网络安全专家 | 代码审计工程师
              </div>
              <div class="text-center">
                <div class="text-[10px] text-[#4facfe] font-semibold">
                  安全审计 · 风险控制
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation-type="geometric" variant="default">
              <img
                class="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto rounded-full object-cover mb-[16px]"
                src="/imgs/team4.png"
                alt="王工 - 首席开发工程师头像"
              />
              <div class="font-[500] text-[14px] lg:text-[16px]">王工</div>
              <div class="text-[#9CB2BA] text-[12px] lg:text-[14px] mb-[12px]">
                首席开发工程师
              </div>
              <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] mb-[12px]">
                全栈开发专家 | DApp架构设计师
              </div>
              <div class="text-center">
                <div class="text-[10px] text-[#00f2fe] font-semibold">
                  DApp开发 · 前后端
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>

        <!-- 顾问团队 -->
        <div class="mb-[50px]">
          <div class="text-[18px] font-semibold mb-[24px] text-[#00f2fe]">
            团队优势
          </div>
        </div>

        <!-- 团队优势 -->
        <div
          class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[30px]"
        >
          <!-- <div class="text-[18px] font-bold text-center mb-[20px]">团队优势</div> -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-[20px] text-center">
            <div>
              <div class="text-[24px] font-bold text-[#4facfe] mb-[8px]">
                50+
              </div>
              <div class="text-[14px] text-[#9CB2BA] mb-[4px]">
                专业团队成员
              </div>
              <div class="text-[12px] text-[#7A8B8F]">
                覆盖技术、商业、法律各领域
              </div>
            </div>
            <div>
              <div class="text-[24px] font-bold text-[#00f2fe] mb-[8px]">
                100+
              </div>
              <div class="text-[14px] text-[#9CB2BA] mb-[4px]">
                技术专利认证
              </div>
              <div class="text-[12px] text-[#7A8B8F]">行业顶级技术认证</div>
            </div>
            <div>
              <div class="text-[24px] font-bold text-[#4facfe] mb-[8px]">
                15+
              </div>
              <div class="text-[14px] text-[#9CB2BA] mb-[4px]">
                平均从业年限
              </div>
              <div class="text-[12px] text-[#7A8B8F]">丰富的行业实战经验</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ROADMAP - 公司发展历程 -->
      <div id="roadmap" class="w-full mt-[100px] lg:mt-[120px]">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          公司发展历程
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[50px] text-center lg:text-left"
        >
          从初创外包团队到专业区块链开发服务商，见证我们在技术服务领域的成长轨迹
        </div>

        <!-- 响应式时间线布局 -->
        <div class="relative">
          <!-- 桌面端水平时间线（XL屏幕） -->
          <div class="hidden xl:block">
            <!-- 水平连接线 -->
            <div
              class="absolute top-[80px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-80"
            ></div>

            <div class="grid grid-cols-5 gap-[20px] relative">
              <!-- 2019年 - 团队创立 -->
              <div class="text-center relative group">
                <div
                  class="relative z-10 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road1.png"
                    alt="2019年团队创立里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] min-h-[280px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2019年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">团队创立</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    在吉隆坡创立ChainShield技术团队，专注区块链外包开发服务
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold">3人</span>
                    </div>
                    <div>
                      首个项目:
                      <span class="text-[#4facfe] font-semibold"
                        >智能合约开发</span
                      >
                    </div>
                    <div>
                      业务方向:
                      <span class="text-[#4facfe] font-semibold">外包开发</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2020年 - 业务拓展 -->
              <div class="text-center relative group">
                <div
                  class="relative z-10 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road2.png"
                    alt="2020年业务拓展里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] min-h-[280px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#00f2fe]">
                    2020年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">业务拓展</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    开始承接DApp开发项目，建立标准化开发流程和质量管控体系
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold">10+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold">15个</span>
                    </div>
                    <div>
                      服务类型:
                      <span class="text-[#00f2fe] font-semibold">DApp开发</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2021年 - 团队扩充 -->
              <div class="text-center relative group">
                <div
                  class="relative z-10 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road3.png"
                    alt="2021年团队扩充里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] min-h-[280px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2021年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">团队扩充</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队扩展至15人，专业分工涵盖前端、后端、智能合约开发
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold">15人</span>
                    </div>
                    <div>
                      服务扩展:
                      <span class="text-[#4facfe] font-semibold">钱包开发</span>
                    </div>
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold">35+</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2022-2023年 - 技术升级 -->
              <div class="text-center relative group">
                <div
                  class="relative z-10 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road4.png"
                    alt="2022-2023年技术升级里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] min-h-[280px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#00f2fe]">
                    2022-2023
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">技术升级</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    引入多链开发能力，拓展CEX、DEX等大型项目开发服务
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold">80+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold">120+</span>
                    </div>
                    <div>
                      技术栈:
                      <span class="text-[#00f2fe] font-semibold">多链支持</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2024-2025年 - AI加持发展 -->
              <div class="text-center relative group">
                <div
                  class="relative z-10 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road5.png"
                    alt="2024-2025年AI加持里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] min-h-[280px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2024-2025
                  </div>
                  <div
                    class="text-[14px] font-semibold mb-[8px] text-[#00f2fe]"
                  >
                    AI加持发展
                  </div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队全面拥抱AI技术，开发效率提升3倍，成为领先的外包服务商
                  </div>
                  <div class="text-[10px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold">150+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#4facfe] font-semibold">200+</span>
                    </div>
                    <div>
                      技术优势:
                      <span class="text-[#4facfe] font-semibold"
                        >AI辅助开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 移动端和平板端垂直时间线 -->
          <div class="xl:hidden">
            <div class="relative space-y-[30px] lg:space-y-[40px]">
              <!-- 垂直连接线 -->
              <div
                class="absolute left-[30px] md:left-[40px] top-[30px] bottom-[30px] w-[2px] bg-gradient-to-b from-[#4facfe] via-[#00f2fe] to-[#4facfe] opacity-80"
              ></div>

              <!-- 2019年 - 团队创立 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road1.png"
                    alt="2019年团队创立里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#4facfe]"
                  >
                    2019年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    团队创立
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    在吉隆坡创立ChainShield技术团队，专注区块链外包开发服务
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >3人</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      首个项目:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >智能合约开发</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      业务方向:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >外包开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2020年 - 业务拓展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road2.png"
                    alt="2020年业务拓展里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#00f2fe]"
                  >
                    2020年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    业务拓展
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    开始承接DApp开发项目，建立标准化开发流程和质量管控体系
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >10+</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >15个</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      服务类型:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >DApp开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2021年 - 团队扩充 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road3.png"
                    alt="2021年团队扩充里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2021年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">团队扩充</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队扩展至15人，专业分工涵盖前端、后端、智能合约开发
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >15人</span
                      >
                    </div>
                    <div>
                      服务扩展:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >钱包开发</span
                      >
                    </div>
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >35+</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2022-2023年 - 技术升级 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road4.png"
                    alt="2022-2023年技术升级里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#00f2fe]">
                    2022-2023
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">技术升级</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    引入多链开发能力，拓展CEX、DEX等大型项目开发服务
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold">80+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold">120+</span>
                    </div>
                    <div>
                      技术栈:
                      <span class="text-[#00f2fe] font-semibold">多链支持</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2024-2025年 - AI加持发展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road5.png"
                    alt="2024-2025年AI加持里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2024-2025
                  </div>
                  <div
                    class="text-[14px] font-semibold mb-[8px] text-[#00f2fe]"
                  >
                    AI加持发展
                  </div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队全面拥抱AI技术，开发效率提升3倍，成为领先的外包服务商
                  </div>
                  <div class="text-[10px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold">150+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#4facfe] font-semibold">200+</span>
                    </div>
                    <div>
                      技术优势:
                      <span class="text-[#4facfe] font-semibold"
                        >AI辅助开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 移动端和平板端垂直时间线 -->
          <div class="xl:hidden">
            <div class="relative space-y-[30px] lg:space-y-[40px]">
              <!-- 垂直连接线 -->
              <div
                class="absolute left-[30px] md:left-[40px] top-[30px] bottom-[30px] w-[2px] bg-gradient-to-b from-[#4facfe] via-[#00f2fe] to-[#4facfe] opacity-80"
              ></div>

              <!-- 2019年 - 团队创立 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road1.png"
                    alt="2019年团队创立里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#4facfe]"
                  >
                    2019年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    团队创立
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    在吉隆坡创立ChainShield技术团队，专注区块链外包开发服务
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >3人</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      首个项目:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >智能合约开发</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      业务方向:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >外包开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2020年 - 业务拓展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road2.png"
                    alt="2020年业务拓展里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#00f2fe]"
                  >
                    2020年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    业务拓展
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    开始承接DApp开发项目，建立标准化开发流程和质量管控体系
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >10+</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >15个</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      服务类型:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >DApp开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2021年 - 团队扩充 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road3.png"
                    alt="2021年团队扩充里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2021年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">团队扩充</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队扩展至15人，专业分工涵盖前端、后端、智能合约开发
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >15人</span
                      >
                    </div>
                    <div>
                      服务扩展:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >钱包开发</span
                      >
                    </div>
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >35+</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2022-2023年 - 技术升级 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road4.png"
                    alt="2022-2023年技术升级里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#00f2fe]">
                    2022-2023
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">技术升级</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    引入多链开发能力，拓展CEX、DEX等大型项目开发服务
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold">80+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold">120+</span>
                    </div>
                    <div>
                      技术栈:
                      <span class="text-[#00f2fe] font-semibold">多链支持</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2024-2025年 - AI加持发展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road5.png"
                    alt="2024-2025年AI加持里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2024-2025
                  </div>
                  <div
                    class="text-[14px] font-semibold mb-[8px] text-[#00f2fe]"
                  >
                    AI加持发展
                  </div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队全面拥抱AI技术，开发效率提升3倍，成为领先的外包服务商
                  </div>
                  <div class="text-[10px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold">150+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#4facfe] font-semibold">200+</span>
                    </div>
                    <div>
                      技术优势:
                      <span class="text-[#4facfe] font-semibold"
                        >AI辅助开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 移动端和平板端垂直时间线 -->
          <div class="xl:hidden">
            <div class="relative space-y-[30px] lg:space-y-[40px]">
              <!-- 垂直连接线 -->
              <div
                class="absolute left-[30px] md:left-[40px] top-[30px] bottom-[30px] w-[2px] bg-gradient-to-b from-[#4facfe] via-[#00f2fe] to-[#4facfe] opacity-80"
              ></div>

              <!-- 2019年 - 团队创立 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road1.png"
                    alt="2019年团队创立里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#4facfe]"
                  >
                    2019年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    团队创立
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    在吉隆坡创立ChainShield技术团队，专注区块链外包开发服务
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >3人</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      首个项目:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >智能合约开发</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#4facfe] rounded-full mr-[8px]"
                      ></div>
                      业务方向:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >外包开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2020年 - 业务拓展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road2.png"
                    alt="2020年业务拓展里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    class="text-[20px] lg:text-[22px] font-bold mb-[10px] text-[#00f2fe]"
                  >
                    2020年
                  </div>
                  <div
                    class="text-[18px] lg:text-[20px] font-semibold mb-[12px]"
                  >
                    业务拓展
                  </div>
                  <div
                    class="text-[15px] lg:text-[16px] text-[#9CB2BA] mb-[15px] leading-relaxed"
                  >
                    开始承接DApp开发项目，建立标准化开发流程和质量管控体系
                  </div>
                  <div
                    class="text-[13px] lg:text-[14px] text-[#7A8B8F] space-y-[6px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >10+</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >15个</span
                      >
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-[4px] h-[4px] bg-[#00f2fe] rounded-full mr-[8px]"
                      ></div>
                      服务类型:
                      <span class="text-[#00f2fe] font-semibold ml-[4px]"
                        >DApp开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2021年 - 团队扩充 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road3.png"
                    alt="2021年团队扩充里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2021年
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">团队扩充</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队扩展至15人，专业分工涵盖前端、后端、智能合约开发
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      团队规模:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >15人</span
                      >
                    </div>
                    <div>
                      服务扩展:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >钱包开发</span
                      >
                    </div>
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold ml-[4px]"
                        >35+</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2022-2023年 - 技术升级 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road4.png"
                    alt="2022-2023年技术升级里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#00f2fe]">
                    2022-2023
                  </div>
                  <div class="text-[14px] font-semibold mb-[8px]">技术升级</div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    引入多链开发能力，拓展CEX、DEX等大型项目开发服务
                  </div>
                  <div class="text-[10px] lg:text-[12px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#00f2fe] font-semibold">80+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#00f2fe] font-semibold">120+</span>
                    </div>
                    <div>
                      技术栈:
                      <span class="text-[#00f2fe] font-semibold">多链支持</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2024-2025年 - AI加持发展 -->
              <div class="relative pl-[80px] md:pl-[100px] group">
                <div
                  class="absolute left-0 top-0 w-[60px] h-[60px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-[20px] shadow-lg group-hover:scale-110 transition-all duration-300"
                >
                  <img
                    class="w-[30px] h-[30px]"
                    src="/imgs/road5.png"
                    alt="2024-2025年AI加持里程碑图标"
                  />
                </div>
                <div
                  class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] lg:p-[24px] hover:border-[#4facfe] hover:shadow-lg hover:shadow-[#4facfe]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="text-[16px] font-bold mb-[8px] text-[#4facfe]">
                    2024-2025
                  </div>
                  <div
                    class="text-[14px] font-semibold mb-[8px] text-[#00f2fe]"
                  >
                    AI加持发展
                  </div>
                  <div class="text-[12px] text-[#9CB2BA] mb-[12px]">
                    团队全面拥抱AI技术，开发效率提升3倍，成为领先的外包服务商
                  </div>
                  <div class="text-[10px] text-[#7A8B8F] space-y-[4px]">
                    <div>
                      累计客户:
                      <span class="text-[#4facfe] font-semibold">150+</span>
                    </div>
                    <div>
                      完成项目:
                      <span class="text-[#4facfe] font-semibold">200+</span>
                    </div>
                    <div>
                      技术优势:
                      <span class="text-[#4facfe] font-semibold"
                        >AI辅助开发</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 发展成果数据统计 -->
        <div
          class="mt-[50px] lg:mt-[60px] bg-gradient-to-br from-[#1A1F1F] via-[#1A1F1F] to-[#242A2A] border border-[#3B4F54] rounded-[16px] p-[30px] lg:p-[40px] hover:border-[#4facfe] transition-all duration-300"
        >
          <div
            class="text-[20px] lg:text-[26px] font-bold text-center mb-[8px] text-[#4facfe]"
          >
            6年发展成果
          </div>
          <div
            class="text-[14px] lg:text-[16px] text-[#9CB2BA] text-center mb-[30px] lg:mb-[40px]"
          >
            从3人小团队到50+专业技术团队的成长历程
          </div>
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[30px] text-center"
          >
            <div
              class="group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                class="text-[28px] lg:text-[36px] font-bold text-[#4facfe] mb-[8px] group-hover:scale-110 transition-transform duration-300"
              >
                150+
              </div>
              <div
                class="text-[13px] lg:text-[15px] text-[#9CB2BA] mb-[4px] font-semibold"
              >
                服务客户
              </div>
              <div class="text-[11px] lg:text-[13px] text-[#7A8B8F]">
                覆盖全球各地区
              </div>
            </div>
            <div
              class="group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                class="text-[28px] lg:text-[36px] font-bold text-[#00f2fe] mb-[8px] group-hover:scale-110 transition-transform duration-300"
              >
                200+
              </div>
              <div
                class="text-[13px] lg:text-[15px] text-[#9CB2BA] mb-[4px] font-semibold"
              >
                完成项目
              </div>
              <div class="text-[11px] lg:text-[13px] text-[#7A8B8F]">
                质量保证零投诉
              </div>
            </div>
            <div
              class="group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                class="text-[28px] lg:text-[36px] font-bold text-[#4facfe] mb-[8px] group-hover:scale-110 transition-transform duration-300"
              >
                50+
              </div>
              <div
                class="text-[13px] lg:text-[15px] text-[#9CB2BA] mb-[4px] font-semibold"
              >
                团队成员
              </div>
              <div class="text-[11px] lg:text-[13px] text-[#7A8B8F]">
                专业技术团队
              </div>
            </div>
            <div
              class="group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                class="text-[28px] lg:text-[36px] font-bold text-[#00f2fe] mb-[8px] group-hover:scale-110 transition-transform duration-300"
              >
                99.9%
              </div>
              <div
                class="text-[13px] lg:text-[15px] text-[#9CB2BA] mb-[4px] font-semibold"
              >
                客户满意度
              </div>
              <div class="text-[11px] lg:text-[13px] text-[#7A8B8F]">
                长期合作伙伴
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 未来规划板块 -->
      <div class="mt-[60px] lg:mt-[80px]">
        <div class="text-[20px] lg:text-[24px] font-bold mb-[30px] text-center">
          未来发展规划
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] text-center"
          >
            <div class="text-[18px] font-bold mb-[8px] text-[#4facfe]">
              2025年
            </div>
            <div class="text-[14px] text-[#9CB2BA] mb-[8px]">全球扩张</div>
            <div class="text-[12px] text-[#7A8B8F]">
              进入欧美市场，建立国际服务网络
            </div>
          </div>
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] text-center"
          >
            <div class="text-[18px] font-bold mb-[8px] text-[#00f2fe]">
              2026年
            </div>
            <div class="text-[14px] text-[#9CB2BA] mb-[8px]">技术突破</div>
            <div class="text-[12px] text-[#7A8B8F]">
              AI驱动的智能开发平台正式发布
            </div>
          </div>
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] text-center"
          >
            <div class="text-[18px] font-bold mb-[8px] text-[#4facfe]">
              2027年
            </div>
            <div class="text-[14px] text-[#9CB2BA] mb-[8px]">行业标准</div>
            <div class="text-[12px] text-[#7A8B8F]">
              制定行业开发标准，成为标杆企业
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="w-full mt-[100px] lg:mt-[120px] faq-section">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          常见问题
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[50px] text-center lg:text-left"
        >
          关于我们区块链外包开发服务的常见问题解答，帮助您更好地了解我们的服务模式
        </div>

        <div class="space-y-[20px]">
          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#4facfe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(0)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                你们主要提供哪些区块链开发服务？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 0 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 0"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              我们是专业的区块链外包开发团队，核心服务包括：<br />
              🔹 <strong class="text-[#4facfe]">DApp应用开发</strong> -
              去中心化应用的前后端完整开发<br />
              🔹 <strong class="text-[#00f2fe]">智能合约开发</strong> -
              Solidity/Rust合约编写、审计与优化<br />
              🔹 <strong class="text-[#4facfe]">钱包系统开发</strong> -
              多链钱包、硬件钱包集成<br />
              🔹 <strong class="text-[#00f2fe]">交易所开发</strong> -
              CEX/DEX平台的定制开发<br />
              🔹 <strong class="text-[#4facfe]">公链开发</strong> -
              基于Cosmos/Substrate的公链搭建<br />
              已成功为150+全球客户交付200+区块链项目，零质量投诉记录。
            </div>
          </div>

          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#00f2fe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(1)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                外包开发的定价策略和收费模式？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 1 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 1"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              我们采用<strong class="text-[#00f2fe]">透明化定制报价</strong
              >模式，避免标准化定价的不合理性：<br />
              📋 <strong>项目评估</strong>：需求分析 → 技术方案 → 工时估算 →
              合理报价<br />
              💰 <strong>分阶段付款</strong>：项目启动小于10% →
              按进度支付款项-开发完成80% → 验收通过10%<br />
              🎯
              <strong>一价全包</strong
              >：包含完整源码、部署文档、后期技术支持<br />
              💡 <strong>价格优势</strong>：相比其他团队节省30-50%成本<br />
              🆓
              <strong>免费服务</strong>：需求咨询、技术可行性分析、项目工期评估
            </div>
          </div>

          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#4facfe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(2)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                项目开发周期和交付时间安排？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 2 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 2"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              基于6年外包经验，我们制定了标准化的开发周期：<br />
              ⚡
              <strong class="text-[#4facfe]">智能合约</strong
              >：3-4DAY（含测试网部署和审计）<br />
              🚀
              <strong class="text-[#00f2fe]">DApp应用</strong
              >：6-20DAY（根据功能复杂度）<br />
              💼
              <strong class="text-[#4facfe]">钱包开发</strong
              >：2-3周（支持多链集成）<br />
              🏢
              <strong class="text-[#00f2fe]">交易所系统</strong
              >：3-4周（CEX/DEX完整系统）<br />
              🌐
              <strong class="text-[#4facfe]">公链项目</strong
              >：3-10周（包含经济模型设计）<br />
              📈 <strong>进度管控</strong>：每日进度汇报 + 阶段性演示 +
              里程碑交付
            </div>
          </div>

          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#00f2fe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(3)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                如何保障项目质量和代码安全？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 3 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 3"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              我们建立了完善的质量保障体系：<br />
              🛡️ <strong class="text-[#00f2fe]">代码安全</strong>：多轮安全审计
              + 渗透测试 + 漏洞检测<br />
              👥
              <strong class="text-[#4facfe]">团队资质</strong
              >：核心开发者平均8年+经验，持有Solidity/Go认证<br />
              🔍 <strong class="text-[#00f2fe]">质量管控</strong>：代码Review +
              单元测试 + 集成测试覆盖率95%+<br />
              📋 <strong class="text-[#4facfe]">交付标准</strong>：完整源码 +
              API文档 + 部署指南 <br />
              🎯
              <strong class="text-[#00f2fe]">服务承诺</strong
              >：项目交付后30天免费技术支持 + Bug修复保障<br />
              💯
              <strong class="text-[#4facfe]">成功记录</strong
              >：200+项目零质量投诉，99.9%客户满意度
            </div>
          </div>

          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#00f2fe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(4)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                提供哪些售后支持和技术服务？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 4 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 4"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              我们提供全方位的售后技术支持服务：<br />
              🚨
              <strong class="text-[#4facfe]">紧急响应</strong
              >：7×24小时技术热线，2小时内响应严重问题<br />
              🔧
              <strong class="text-[#00f2fe]">技术维护</strong
              >：系统升级、安全补丁、性能优化服务<br />
              📚
              <strong class="text-[#4facfe]">培训服务</strong
              >：团队技术培训、系统操作指导、最佳实践分享<br />
              💬
              <strong class="text-[#00f2fe]">沟通渠道</strong
              >：Telegram、邮件多渠道技术咨询<br />
              🔄
              <strong class="text-[#4facfe]">版本迭代</strong
              >：根据业务发展需求，提供功能扩展和升级服务<br />
              🎁
              <strong class="text-[#00f2fe]">增值服务</strong
              >：市场推广建议、代币经济学咨询、合规性指导
            </div>
          </div>

          <div
            class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] p-[20px] scroll-card hover:border-[#00f2fe] transition-all duration-300"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(5)"
            >
              <div class="text-[16px] lg:text-[18px] font-semibold">
                与其他开发团队相比有什么优势？
              </div>
              <div
                class="text-[20px] transition-transform duration-300"
                :class="{ 'rotate-45': openFaq === 5 }"
              >
                +
              </div>
            </div>
            <div
              v-if="openFaq === 5"
              class="mt-[15px] text-[14px] lg:text-[16px] text-[#9CB2BA] leading-relaxed"
            >
              选择链盾科技的核心竞争优势：<br />
              🤖
              <strong class="text-[#00f2fe]">AI加持开发</strong
              >：全面应用AI工具，开发效率提升300%，成本降低40%<br />
              🌍
              <strong class="text-[#4facfe]">国际化团队</strong
              >：国内团队，海外团队，支持多时区协作<br />
              💰
              <strong class="text-[#00f2fe]">成本优势</strong
              >：一品一价透明报价，无隐藏费用，性价比超高<br />
              ⚡
              <strong class="text-[#4facfe]">快速交付</strong
              >：标准化开发流程+AI辅助，交付速度比传统团队快50%<br />
              🛡️
              <strong class="text-[#00f2fe]">安全保障</strong
              >：专业安全审计团队，确保代码安全和资金安全<br />
              🎯
              <strong class="text-[#4facfe]">专业专注</strong
              >：6年专注区块链开发，不做其他业务，技术更专业
            </div>
          </div>
        </div>

        <!-- 更多问题引导 -->
        <div class="mt-[40px] text-center">
          <div class="text-[16px] text-[#9CB2BA] mb-[20px]">还有其他问题？</div>
          <button
            @click="openCrispChat"
            class="inline-block bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white px-[30px] py-[12px] rounded-[8px] font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            联系我们获取帮助
          </button>
        </div>
      </div>

      <!-- CONTACT -->
      <div id="contact" class="w-full mt-[100px] lg:mt-[120px] contact-section">
        <h2
          class="text-[22px] lg:text-[28px] font-bold text-center lg:text-left mb-[20px]"
        >
          联系我们
        </h2>
        <div
          class="text-[14px] lg:text-[16px] text-[#9CB2BA] mb-[50px] text-center lg:text-left"
        >
          立即获取专业的区块链安全解决方案
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          <!-- 邮箱 -->
          <div
            class="text-center p-[30px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] hover:border-[#4facfe] transition-colors duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#4facfe]/20"
            @click="openEmail"
          >
            <img
              src="/imgs/email.png"
              alt="邮箱图标"
              class="w-[48px] h-[48px] mx-auto mb-[16px]"
            />
            <div class="text-[16px] font-semibold mb-[8px]">邮箱联系</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[12px]">
              chainshield01@proton.me
            </div>
            <div class="text-[12px] text-[#7A8B8F]">24小时内回复</div>
          </div>

          <!-- Twitter -->
          <div
            class="text-center p-[30px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] hover:border-[#4facfe] transition-colors duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#4facfe]/20"
            @click="openTwitter"
          >
            <img
              src="/imgs/twitter.png"
              alt="Twitter图标"
              class="w-[48px] h-[48px] mx-auto mb-[16px]"
            />
            <div class="text-[16px] font-semibold mb-[8px]">Twitter</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[12px]">
              @ChainShield01
            </div>
            <div class="text-[12px] text-[#7A8B8F]">最新动态</div>
          </div>

          <!-- Telegram -->
          <div
            class="text-center p-[30px] bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] hover:border-[#4facfe] transition-colors duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#4facfe]/20"
            @click="openTelegram"
          >
            <img
              src="/imgs/telegram.png"
              alt="Telegram图标"
              class="w-[48px] h-[48px] mx-auto mb-[16px]"
            />
            <div class="text-[16px] font-semibold mb-[8px]">Telegram</div>
            <div class="text-[14px] text-[#9CB2BA] mb-[12px]">
              @ChainShield01
            </div>
            <div class="text-[12px] text-[#7A8B8F]">即时响应</div>
          </div>
        </div>

        <!-- 联系说明 -->
        <div class="mt-[50px] text-center">
          <div class="text-[18px] font-semibold mb-[16px] text-[#4facfe]">
            需要咨询服务？
          </div>
          <div class="text-[14px] text-[#9CB2BA] max-w-[600px] mx-auto">
            我们的专家团队随时为您提供专业的区块链开发咨询服务。无论是DApp开发、智能合约开发、钱包开发，还是定制化区块链解决方案，都可以通过以上方式联系我们。
          </div>
        </div>

        <!-- 公司位置地图 -->
        <div class="mt-[50px] lg:mt-[60px]">
          <div class="w-full max-w-[800px] mx-auto">
            <div
              class="bg-[#1A1F1F] border border-[#3B4F54] rounded-[12px] overflow-hidden"
            >
              <div
                id="map-container"
                class="w-full h-[400px] lg:h-[450px] relative"
              >
                <!-- 地图背景图片作为备用方案 -->
                <img
                  src="/imgs/map.png"
                  alt="链盾科技公司位置地图"
                  class="w-full h-full object-cover"
                />
                <!-- 地图加载提示 -->
                <div
                  class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white"
                >
                  <div class="text-center">
                    <div class="text-[16px] font-semibold">📍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 法规链接 -->
        <div class="mt-[60px] pt-[30px] border-t border-[#3B4F54] text-center">
          <div class="text-[12px] text-[#7A8B8F]">
            © 2024 链盾科技 (ChainShield). 保留所有权利.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      scrollY: 0,
      openFaq: -1,
      ticking: false, // 防止重复调用 requestAnimationFrame
      scrollElements: null, // 缓存 DOM 元素
      map: null, // 地图实例
    };
  },
  mounted() {
    // 使用 throttle 优化滚动事件，减少滚动卡顿
    this.throttledHandleScroll = this.throttle(this.handleScroll, 16); // 约60fps
    window.addEventListener("scroll", this.throttledHandleScroll, {
      passive: true,
    });
    this.updateScrollRevealAnimations();

    // 初始化地图
    this.initMap();
  },
  beforeDestroy() {
    if (this.throttledHandleScroll) {
      window.removeEventListener("scroll", this.throttledHandleScroll);
    }
    // 销毁地图实例
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    // 初始化地图
    initMap() {
      if (process.client && this.$L) {
        try {
          // 吉隆坡市中心坐标
          const kualaLumpurCoords = [3.139, 101.6869];

          // 创建地图实例
          this.map = this.$L.map("map-container", {
            center: kualaLumpurCoords,
            zoom: 15,
            zoomControl: true,
            attributionControl: true,
          });

          // 添加地图图层
          this.$L
            .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: "© OpenStreetMap contributors",
              maxZoom: 18,
            })
            .addTo(this.map);

          // 添加公司位置标记
          const customIcon = this.$L.divIcon({
            html: `
              <div style="
                background: linear-gradient(45deg, #4facfe, #00f2fe);
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(79, 172, 254, 0.4);
                color: white;
                font-weight: bold;
                font-size: 16px;
                border: 3px solid white;
              ">🏢</div>
            `,
            className: "custom-marker",
            iconSize: [36, 36],
            iconAnchor: [18, 18],
          });

          const marker = this.$L
            .marker(kualaLumpurCoords, { icon: customIcon })
            .addTo(this.map);

          // 添加弹出信息
          marker
            .bindPopup(
              `
            <div style="text-align: center; padding: 8px;">
              <strong style="color: #4facfe;">ChainShield</strong><br>
              <span style="color: #666; font-size: 12px;">Professional blockchain development service provider</span><br>
              <span style="color: #999; font-size: 11px;">📍 Kuala Lumpur City Centre</span>
            </div>
          `
            )
            .openPopup();

          // 移除地图加载遮罩
          const loadingOverlay = document.querySelector(
            "#map-container .absolute"
          );
          if (loadingOverlay) {
            loadingOverlay.style.display = "none";
          }
        } catch (error) {
          console.warn("地图初始化失败，将使用静态图片:", error);
        }
      }
    },
    // 节流函数，优化滚动性能
    throttle(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    handleScroll() {
      // 使用 requestAnimationFrame 确保在浏览器重绘时更新
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.scrollY = window.scrollY;
          this.updateScrollRevealAnimations();
          this.ticking = false;
        });
        this.ticking = true;
      }
    },
    updateScrollRevealAnimations() {
      // 减少 DOM 查询，提高性能
      if (!this.scrollElements) {
        this.scrollElements = document.querySelectorAll(".scroll-card");
      }

      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.8;

      this.scrollElements.forEach((element) => {
        if (element.dataset.revealed === "true") return; // 已经显示的元素不再处理

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < threshold;

        if (isVisible) {
          const section = element.closest(
            ".about-section, .services-section, .use-cases, .team-section, .roadmap-section, .faq-section"
          );
          if (section && !section.classList.contains("revealed")) {
            section.classList.add("revealed");
            // 标记已处理，避免重复计算
            section.querySelectorAll(".scroll-card").forEach((card) => {
              card.dataset.revealed = "true";
            });
          }
        }
      });
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? -1 : index;
    },
    openTwitter() {
      window.open('https://twitter.com/ChainShield01', '_blank');
    },
    openEmail() {
      window.location.href = 'mailto:chainshield01@proton.me';
    },
    openTelegram() {
      window.open('https://t.me/ChainShield01', '_blank');
    },
    openCrispChat() {
      // 触发 Crisp 聊天窗口
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:open'])
      }
    },
  },
};
</script>

<style>
/* 全局滚动优化 */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px;
}

body {
  -webkit-overflow-scrolling: touch; /* iOS 滚动优化 */
  overscroll-behavior: none; /* 防止滚动边界反弹 */
}

/* 优化滚动性能的通用规则 */
* {
  box-sizing: border-box;
}

/* 滚动容器优化 */
.main-container {
  transform: translateZ(0); /* 启用硬件加速 */
  will-change: auto; /* 只在需要时启用will-change */
}

/* 导航栏滚动优化 */
nav {
  transform: translateZ(0); /* 硬件加速 */
  backface-visibility: hidden; /* 防止闪烁 */
}

/* 卡片动画优化 */

.use-cases.revealed .scroll-card {
  opacity: 1;
  transform: translateY(0);
}
.use-cases.revealed .scroll-card:nth-child(1) {
  transition-delay: 0.1s;
}
.use-cases.revealed .scroll-card:nth-child(2) {
  transition-delay: 0.15s;
}
.use-cases.revealed .scroll-card:nth-child(3) {
  transition-delay: 0.2s;
}

/* 路线图区块 - 简单淡入 */
.roadmap-section .scroll-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.roadmap-section.revealed .scroll-card {
  opacity: 1;
  transform: translateY(0);
}

.roadmap-section .scroll-card:nth-child(1) {
  transition-delay: 0.1s;
}
.roadmap-section .scroll-card:nth-child(2) {
  transition-delay: 0.15s;
}
.roadmap-section .scroll-card:nth-child(3) {
  transition-delay: 0.2s;
}
.roadmap-section .scroll-card:nth-child(4) {
  transition-delay: 0.25s;
}
.roadmap-section .scroll-card:nth-child(5) {
  transition-delay: 0.3s;
}

/* FAQ区块 - 简单淡入 */
.faq-section .scroll-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.faq-section.revealed .scroll-card {
  opacity: 1;
  transform: translateY(0);
}

.faq-section .scroll-card:nth-child(1) {
  transition-delay: 0.1s;
}
.faq-section .scroll-card:nth-child(2) {
  transition-delay: 0.15s;
}
.faq-section .scroll-card:nth-child(3) {
  transition-delay: 0.2s;
}
.faq-section .scroll-card:nth-child(4) {
  transition-delay: 0.25s;
}
.faq-section .scroll-card:nth-child(5) {
  transition-delay: 0.3s;
}
.faq-section .scroll-card:nth-child(6) {
  transition-delay: 0.35s;
}

/* 简单的悬停效果 */
.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 4px 20px rgba(79, 172, 254, 0.3);
}

/* 进度指示器 */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transform-origin: left;
  z-index: 9999;
  transition: transform 0.1s ease;
}

/* 简化的卡片样式 */
.scroll-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.scroll-card:hover {
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.2);
  transform: translateY(-2px);
}

/* 简化的标题文字效果 */
.scroll-title {
  background: linear-gradient(45deg, #ffffff, #4facfe, #00f2fe, #ffffff);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Banner样式 - 优化性能 */
.banner {
  width: 100%;
  min-height: 600px;
  height: 80vh;
  max-height: 900px;
  background-image: url("/imgs/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll; /* 改为scroll减少重绘 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transform: translateZ(0); /* 硬件加速 */
  will-change: transform;
}

/* Banner渐变遮罩 */
.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(19, 23, 23, 0.7) 0%,
    rgba(19, 23, 23, 0.3) 50%,
    rgba(19, 23, 23, 0.7) 100%
  );
  z-index: 1;
}

/* Banner内容在遮罩之上 */
.banner > div {
  position: relative;
  z-index: 2;
}

/* 渐变文字效果 - 优化性能 */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #4facfe, #00f2fe);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* 移除动画以提升性能 */
  will-change: auto;
  transform: translateZ(0);
}

/* 文字阴影效果 */
.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}

/* 区域间距修复 */
.faq-section {
  position: relative;
  z-index: 5;
  background: transparent;
  margin-bottom: 60px;
}

.contact-section {
  position: relative;
  z-index: 10;
  margin-top: 40px;
  border-top: 1px solid rgba(59, 79, 84, 0.3);
  padding-top: 40px;
}

/* 主内容区域底部间距 */
.main-container {
  padding-bottom: 80px;
}

/* 确保各个区域不重叠 */
#faq {
  margin-bottom: 0;
  padding-bottom: 60px;
}

/* Banner安全区域 */
.banner {
  position: relative;
  z-index: 1;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .banner {
    min-height: 500px;
    height: 70vh;
    max-height: 650px;
    background-attachment: scroll; /* 移动端禁用视差 */
    width: 100%;
  }

  .banner > div {
    padding-top: 140px !important;
    padding-bottom: 50px !important;
  }

  .main-container {
    transform: none !important;
  }

  .scroll-card {
    transform: none !important;
    animation: none !important;
  }

  .scroll-particle {
    display: none;
  }

  /* 移动端FAQ区域调整 */
  .faq-section {
    margin-bottom: 40px;
  }

  /* 移动端联系我们区域调整 */
  .contact-section {
    margin-top: 40px;
  }

  /* 移动端导航栏调整 */
  nav {
    height: 60px !important;
  }

  /* 移动端区块间距调整 */
  #about,
  #services,
  #use-cases,
  #team,
  #roadmap,
  #faq {
    margin-top: 60px !important;
  }
}

/* 性能优化 */
.transform-3d,
.glow,
.tech-line {
  will-change: transform;
  transform: translateZ(0); /* 强制硬件加速 */
}

/* 滚动容器优化 */
.scroll-card {
  will-change: opacity, transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 移动端滚动优化 */
@media (max-width: 768px) {
  body {
    -webkit-overflow-scrolling: touch;
  }

  /* 减少移动端动画 */
  .card-animation-bg {
    display: none !important;
  }

  .banner {
    background-attachment: scroll !important; /* 移动端禁用视差 */
  }
}

/* 减少动画偏好用户的动画 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .banner {
    background-attachment: scroll !important;
  }
}
</style>
