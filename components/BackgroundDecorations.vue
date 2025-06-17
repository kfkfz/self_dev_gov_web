<template>
  <div class="particle-background">
    <canvas
      ref="particleCanvas"
      class="particle-canvas"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    ></canvas>

    <!-- 添加一些静态装饰元素 -->
    <div class="static-decorations">
      <div class="floating-orb orb-1"></div>
      <div class="floating-orb orb-2"></div>
      <div class="floating-orb orb-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundDecorations',
  data() {
    return {
      canvas: null,
      ctx: null,
      particles: [],
      animationId: null,
      mouse: {
        x: null,
        y: null,
        radius: 150
      },
      isVisible: true,
      config: {
        particleCount: 60,
        particleSpeed: 0.8,
        connectionDistance: 120,
        mouseInteraction: true,
        colors: {
          particles: [
            '#4facfe',  // 网站主色调 - 蓝色
            '#00f2fe',  // 网站主色调 - 青蓝色
            '#9CB2BA',  // 网站辅助色 - 灰蓝色
            '#7DB8C9'   // 中间调 - 柔和蓝色
          ],
          connections: '#4facfe',      // 使用网站主色调
          mouseConnection: '#00f2fe'   // 使用网站亮色调
        }
      }
    }
  },
  mounted() {
    this.checkPerformance()
    if (this.isVisible) {
      this.initCanvas()
      this.createParticles()
      this.animate()
    }

    // 响应式处理
    window.addEventListener('resize', this.handleResize)

    // 页面可见性优化
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  },
  beforeDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  },
  methods: {
    checkPerformance() {
      // 检测设备性能
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isLowEndDevice = navigator.hardwareConcurrency <= 2 || (navigator.deviceMemory && navigator.deviceMemory <= 2)

      this.isVisible = !isMobile && !prefersReducedMotion && !isLowEndDevice

      // 根据性能调整粒子数量
      if (this.isVisible) {
        if (isLowEndDevice) {
          this.config.particleCount = 30
        } else if (navigator.hardwareConcurrency >= 8) {
          this.config.particleCount = 80
        }
      }
    },

    initCanvas() {
      this.canvas = this.$refs.particleCanvas
      if (!this.canvas) return

      this.ctx = this.canvas.getContext('2d')
      this.resizeCanvas()
    },

    resizeCanvas() {
      if (!this.canvas) return
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    },

    createParticles() {
      this.particles = []

      for (let i = 0; i < this.config.particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * this.config.particleSpeed,
          vy: (Math.random() - 0.5) * this.config.particleSpeed,
          size: Math.random() * 6 + 5,  // 更大的体积：5-11像素
          color: this.config.colors.particles[Math.floor(Math.random() * this.config.colors.particles.length)],
          opacity: Math.random() * 0.25 + 0.4,  // 提高基础透明度，确保静态可见性
          originalOpacity: Math.random() * 0.25 + 0.4,
          rotation: Math.random() * Math.PI * 2,  // 旋转角度
          rotationSpeed: (Math.random() - 0.5) * 0.04,  // 提升旋转速度
          shape: Math.random() < 0.6 ? 'square' : 'circle',  // 60%方块，40%圆形
          renderType: Math.random() < 0.1 ? 'filled' : 'stroke'  // 固定渲染类型，避免闪烁
        })
      }
    },

    updateParticles() {
      const time = Date.now() * 0.0008 // 更慢的时间系数

      this.particles.forEach(particle => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 边界检测 - 平滑循环
        if (particle.x < -10) particle.x = this.canvas.width + 10
        if (particle.x > this.canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = this.canvas.height + 10
        if (particle.y > this.canvas.height + 10) particle.y = -10

        // 完全静态，无任何透明度变化
        particle.opacity = particle.originalOpacity

        // 旋转更新
        particle.rotation += particle.rotationSpeed

        // 鼠标交互 - 更柔和
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = this.mouse.x - particle.x
          const dy = this.mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < this.mouse.radius) {
            const force = (this.mouse.radius - distance) / this.mouse.radius
            const angle = Math.atan2(dy, dx)

            // 轻微的吸引力
            particle.vx += Math.cos(angle) * force * 0.005
            particle.vy += Math.sin(angle) * force * 0.005

            // 增强发光但不过度
            particle.opacity = Math.min(0.8, particle.originalOpacity + force * 0.3)
          }
        }

        // 减少速度衰减，保持更高运动速度
        particle.vx *= 0.998
        particle.vy *= 0.998

        // 保持最小运动，提高基础速度
        if (Math.abs(particle.vx) < 0.1) particle.vx += (Math.random() - 0.5) * 0.02
        if (Math.abs(particle.vy) < 0.1) particle.vy += (Math.random() - 0.5) * 0.02
      })
    },

    drawParticles() {
      this.particles.forEach(particle => {
        this.ctx.save()

        // 移动到粒子中心并旋转
        this.ctx.translate(particle.x, particle.y)
        this.ctx.rotate(particle.rotation)

        // 柔和的发光效果
        this.ctx.shadowColor = particle.color
        this.ctx.shadowBlur = 6  // 减少发光强度

        this.ctx.globalAlpha = particle.opacity
        this.ctx.strokeStyle = particle.color
        this.ctx.fillStyle = particle.color
        this.ctx.lineWidth = 2.0  // 增加线框宽度，让线框更明显

        if (particle.shape === 'square') {
          // 绘制线框方块
          const halfSize = particle.size / 2
          this.ctx.beginPath()
          this.ctx.rect(-halfSize, -halfSize, particle.size, particle.size)

          // 使用固定渲染类型，避免闪烁
          if (particle.renderType === 'filled') {
            this.ctx.globalAlpha = particle.opacity * 0.3
            this.ctx.fill()
          } else {
            this.ctx.stroke()
          }
        } else {
          // 绘制圆形
          this.ctx.beginPath()
          this.ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)

          // 使用固定渲染类型，避免闪烁
          if (particle.renderType === 'filled') {
            this.ctx.globalAlpha = particle.opacity * 0.4
            this.ctx.fill()
          } else {
            this.ctx.stroke()
          }
        }

        this.ctx.restore()
      })
    },

    drawConnections() {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x
          const dy = this.particles[i].y - this.particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < this.config.connectionDistance) {
            const opacity = (this.config.connectionDistance - distance) / this.config.connectionDistance

            this.ctx.save()
            this.ctx.strokeStyle = this.config.colors.connections
            this.ctx.globalAlpha = opacity * 0.35 // 进一步提高透明度，使连接线更明显
            this.ctx.lineWidth = 0.8  // 稍微增加线宽，提高可见度
            this.ctx.beginPath()
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y)
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
            this.ctx.stroke()
            this.ctx.restore()
          }
        }
      }
    },

    drawMouseConnections() {
      if (this.mouse.x === null || this.mouse.y === null) return

      this.particles.forEach(particle => {
        const dx = this.mouse.x - particle.x
        const dy = this.mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.mouse.radius) {
          const opacity = (this.mouse.radius - distance) / this.mouse.radius

          this.ctx.save()
          this.ctx.strokeStyle = this.config.colors.mouseConnection
          this.ctx.globalAlpha = opacity * 0.4
          this.ctx.lineWidth = 1.5
          this.ctx.beginPath()
          this.ctx.moveTo(this.mouse.x, this.mouse.y)
          this.ctx.lineTo(particle.x, particle.y)
          this.ctx.stroke()
          this.ctx.restore()
        }
      })
    },

    animate() {
      if (!this.isVisible || !this.ctx) return

      // 清空画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // 更新和绘制
      this.updateParticles()
      this.drawConnections()
      this.drawParticles()
      this.drawMouseConnections()

      this.animationId = requestAnimationFrame(this.animate)
    },

    handleMouseMove(event) {
      if (!this.canvas) return
      const rect = this.canvas.getBoundingClientRect()
      this.mouse.x = event.clientX - rect.left
      this.mouse.y = event.clientY - rect.top
    },

    handleMouseLeave() {
      this.mouse.x = null
      this.mouse.y = null
    },

    handleResize() {
      if (this.isVisible) {
        this.resizeCanvas()
        this.createParticles()
      }
    },

    handleVisibilityChange() {
      if (document.hidden) {
        if (this.animationId) {
          cancelAnimationFrame(this.animationId)
          this.animationId = null
        }
      } else {
        if (this.isVisible && !this.animationId) {
          this.animate()
        }
      }
    }
  }
}
</script>

<style scoped>
.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle-canvas {
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

/* 静态装饰元素 */
.static-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.03) 0%, transparent 70%);
  animation: floatOrb 20s ease-in-out infinite;
}

.orb-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 15%;
  animation-delay: 0s;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.03) 0%, transparent 70%);
}

.orb-2 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 10%;
  animation-delay: 7s;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.025) 0%, transparent 70%);
}

.orb-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 40%;
  animation-delay: 14s;
  background: radial-gradient(circle, rgba(156, 178, 186, 0.02) 0%, transparent 70%);
}

@keyframes floatOrb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  33% {
    transform: translate(20px, -15px) scale(1.05);
    opacity: 0.5;
  }
  66% {
    transform: translate(-15px, 10px) scale(0.95);
    opacity: 0.4;
  }
}

/* 移动设备优化 */
@media (max-width: 768px) {
  .particle-background {
    display: none;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .particle-background {
    display: none;
  }
}

/* 性能优化 */
.particle-canvas {
  will-change: auto;
  transform: translateZ(0);
}

.floating-orb {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
