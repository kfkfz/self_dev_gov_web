<template>
  <div
    class="animated-card relative overflow-hidden group cursor-pointer"
    :class="cardClasses"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- CSS动画背景装饰 -->
    <div
      v-if="!isMobile"
      class="card-bg-animation"
      :class="backgroundAnimationClass"
    ></div>

    <!-- 内容区域 -->
    <div class="card-content relative z-10 p-6">
      <slot></slot>
    </div>

    <!-- 悬停效果 -->
    <div class="card-hover-effect"></div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedCard',
  props: {
    animationType: {
      type: String,
      default: 'glow',
      validator: value => ['glow', 'particles', 'tech', 'wave', 'geometric', 'none'].includes(value)
    },
    variant: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data() {
    return {
      isHovered: false,
      isMobile: false
    }
  },
  computed: {
    cardClasses() {
      return [
        'bg-gradient-to-br',
        'from-[#1A1F1F]',
        'to-[#131717]',
        'border',
        'border-[#3B4F54]',
        'rounded-[12px]',
        'transition-all',
        'duration-300',
        'transform-gpu',
        this.sizeClasses,
        this.variantClasses,
        !this.isMobile ? 'hover:border-[#4A5B5F] hover:shadow-xl hover:-translate-y-1' : ''
      ]
    },

    sizeClasses() {
      const sizes = {
        sm: 'min-h-[80px]',
        md: 'min-h-[100px]',
        lg: 'min-h-[120px]'
      }
      return sizes[this.size] || sizes.md
    },

    variantClasses() {
      const variants = {
        default: 'hover:shadow-[#3B4F54]/20',
        primary: 'hover:shadow-[#4A9EFF]/20 hover:border-[#4A9EFF]/50',
        secondary: 'hover:shadow-[#9CB2BA]/20 hover:border-[#9CB2BA]/50',
        accent: 'hover:shadow-[#00D4AA]/20 hover:border-[#00D4AA]/50'
      }
      return this.isMobile ? '' : (variants[this.variant] || variants.default)
    },

    backgroundAnimationClass() {
      const animations = {
        glow: 'bg-glow-animation',
        particles: 'bg-particles-animation',
        tech: 'bg-tech-animation',
        wave: 'bg-wave-animation',
        geometric: 'bg-geometric-animation',
        none: ''
      }
      return animations[this.animationType] || ''
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    onMouseEnter() {
      if (!this.isMobile) {
        this.isHovered = true
      }
    },
    onMouseLeave() {
      this.isHovered = false
    }
  }
}
</script>

<style scoped>
.animated-card {
  position: relative;
  backdrop-filter: blur(10px);
  transform: translateZ(0);
  backface-visibility: hidden;
}

.card-bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  transition: opacity 0.3s ease;
  will-change: opacity;
  transform: translateZ(0);
}

.animated-card:hover .card-bg-animation {
  opacity: 0.06;
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(156, 178, 186, 0.02) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.animated-card:hover .card-hover-effect {
  opacity: 1;
}

/* 极简动画背景 */
.bg-glow-animation {
  background: radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.02) 0%, transparent 70%);
  animation: pulseGlow 6s ease-in-out infinite alternate;
}

.bg-particles-animation {
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(79, 172, 254, 0.03), transparent),
    radial-gradient(1px 1px at 80% 70%, rgba(0, 242, 254, 0.02), transparent);
  background-size: 100px 100px, 120px 120px;
  animation: moveParticles 15s linear infinite;
}

.bg-tech-animation {
  background-image:
    linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.015) 50%, transparent 100%);
  background-size: 200px 1px;
  animation: techScan 8s ease-in-out infinite;
}

.bg-wave-animation {
  background: linear-gradient(45deg,
    rgba(79, 172, 254, 0.01) 0%,
    rgba(0, 242, 254, 0.02) 50%,
    rgba(79, 172, 254, 0.01) 100%);
  background-size: 300% 300%;
  animation: waveFlow 10s ease-in-out infinite;
}

.bg-geometric-animation {
  background-image:
    conic-gradient(from 0deg at 30% 30%, transparent 0deg, rgba(79, 172, 254, 0.015) 90deg, transparent 180deg);
  background-size: 150px 150px;
  animation: rotateGeometry 20s linear infinite;
}

/* 动画关键帧 - 更慢更平缓 */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.06; }
}

@keyframes moveParticles {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(5px, -3px); }
  66% { transform: translate(-3px, 5px); }
}

@keyframes techScan {
  0%, 100% { background-position: -200px 0; }
  50% { background-position: 200px 0; }
}

@keyframes waveFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes rotateGeometry {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 移动端完全禁用动画 */
@media (max-width: 768px) {
  .card-bg-animation {
    display: none !important;
  }

  .animated-card {
    transition: none !important;
  }

  .animated-card:hover {
    transform: none !important;
    box-shadow: none !important;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .card-bg-animation {
    display: none !important;
  }

  .animated-card {
    transition: none !important;
  }

  * {
    animation: none !important;
  }
}
</style>
