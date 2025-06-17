<template>
  <div class="fixed right-6 bottom-24 z-40">
    <!-- 悬浮按钮 -->
    <div
      v-if="!isExpanded"
      class="relative group"
    >
      <!-- 主按钮 -->
      <button
        @click="toggleWidget"
        class="w-16 h-16 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
      >
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.02 8.02 0 01-2.83-.5l-5.17 1.672V15a8 8 0 118-3z"></path>
        </svg>
      </button>

      <!-- 脉冲动画 -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] animate-ping opacity-75"></div>

      <!-- 提示文字 -->
      <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
          联系我们
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </div>

    <!-- 展开的联系窗口 -->
    <div
      v-if="isExpanded"
      class="bg-[#1A1F1F] border border-[#3B4F54] rounded-2xl shadow-2xl p-6 w-80 animate-slide-up"
    >
      <!-- 头部 -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.02 8.02 0 01-2.83-.5l-5.17 1.672V15a8 8 0 118-3z"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg">联系我们</h3>
            <p class="text-[#9CB2BA] text-sm">选择您的联系方式</p>
          </div>
        </div>
        <button
          @click="toggleWidget"
          class="text-[#9CB2BA] hover:text-white transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- 联系选项 -->
      <div class="space-y-4">
        <!-- 在线客服 (Crisp) -->
        <div
          @click="openCrispChat"
          class="group flex items-center space-x-4 p-4 bg-[#252A2A] border border-[#3B4F54] rounded-xl hover:border-[#00f2fe] hover:bg-[#2A2F2F] transition-all duration-300 cursor-pointer"
        >
          <div class="w-12 h-12 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-white font-semibold group-hover:text-[#00f2fe] transition-colors duration-300">在线客服</div>
            <div class="text-[#9CB2BA] text-sm">专业技术支持</div>
            <div class="text-[#7A8B8F] text-xs flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              在线服务
            </div>
          </div>
          <div class="text-[#00f2fe] group-hover:translate-x-1 transition-transform duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- 邮箱联系 -->
        <div
          @click="openEmail"
          class="group flex items-center space-x-4 p-4 bg-[#252A2A] border border-[#3B4F54] rounded-xl hover:border-[#4facfe] hover:bg-[#2A2F2F] transition-all duration-300 cursor-pointer"
        >
          <div class="w-12 h-12 bg-[#34495e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-white font-semibold group-hover:text-[#4facfe] transition-colors duration-300">邮箱联系</div>
            <div class="text-[#9CB2BA] text-sm">chainshield01@proton.me</div>
            <div class="text-[#7A8B8F] text-xs">24小时内回复</div>
          </div>
          <div class="text-[#4facfe] group-hover:translate-x-1 transition-transform duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- 底部提示 -->
      <div class="mt-6 pt-4 border-t border-[#3B4F54]">
        <p class="text-[#7A8B8F] text-xs text-center">
          🛡️ 专业区块链开发团队 • 6年行业经验
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingContactWidget',
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleWidget() {
      this.isExpanded = !this.isExpanded
    },
    openCrispChat() {
      // 触发 Crisp 聊天窗口
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:open'])
      }
    },
    openEmail() {
      window.location.href = 'mailto:chainshield01@proton.me'
    },
    handleClickOutside(event) {
      if (this.isExpanded && !this.$el.contains(event.target)) {
        this.isExpanded = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out forwards;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* 确保悬浮窗在移动端也能正确显示 */
@media (max-width: 640px) {
  .fixed.right-6.bottom-24 {
    right: 1rem;
    bottom: 6rem; /* 增加底部距离，避免与Crisp重合 */
  }

  .w-80 {
    width: calc(100vw - 2rem);
    max-width: 20rem;
  }
}
</style>
