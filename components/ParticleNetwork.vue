<template>
  <div class="particle-container">
    <canvas
      ref="particleCanvas"
      class="particle-canvas"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'ParticleNetwork',
  data() {
    return {
      canvas: null,
      ctx: null,
      particles: [],
      animationId: null,
      mouse: {
        x: null,
        y: null,
        radius: 120
      },
      config: {
        particleCount: 80,
        particleSpeed: 0.5,
        connectionDistance: 120,
        mouseInteraction: true,
        colors: {
          particles: ['#64FFDA', '#82B1FF', '#FFD54F', '#E1BEE7'],
          connections: '#64FFDA',
          mouseConnection: '#FFD54F'
        }
      }
    }
  },
  mounted() {
    this.initCanvas()
    this.createParticles()
    this.animate()

    // 响应式处理
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.particleCanvas
      this.ctx = this.canvas.getContext('2d')
      this.resizeCanvas()
    },

    resizeCanvas() {
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
          radius: Math.random() * 3 + 1,
          color: this.config.colors.particles[Math.floor(Math.random() * this.config.colors.particles.length)],
          opacity: Math.random() * 0.5 + 0.3,
          originalOpacity: Math.random() * 0.5 + 0.3,
          pulsePhase: Math.random() * Math.PI * 2
        })
      }
    },

    updateParticles() {
      const time = Date.now() * 0.001

      this.particles.forEach(particle => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 边界检测 - 循环效果
        if (particle.x < 0) particle.x = this.canvas.width
        if (particle.x > this.canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = this.canvas.height
        if (particle.y > this.canvas.height) particle.y = 0

        // 脉冲效果
        const pulse = Math.sin(time * 2 + particle.pulsePhase) * 0.2 + 0.8
        particle.opacity = particle.originalOpacity * pulse

        // 鼠标交互
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = this.mouse.x - particle.x
          const dy = this.mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < this.mouse.radius) {
            // 鼠标吸引效果
            const force = (this.mouse.radius - distance) / this.mouse.radius
            const angle = Math.atan2(dy, dx)

            particle.vx += Math.cos(angle) * force * 0.01
            particle.vy += Math.sin(angle) * force * 0.01

            // 增强发光
            particle.opacity = Math.min(1, particle.originalOpacity + force * 0.5)
          }
        }

        // 速度衰减，保持稳定
        particle.vx *= 0.99
        particle.vy *= 0.99

        // 最小速度保持
        if (Math.abs(particle.vx) < 0.1) particle.vx += (Math.random() - 0.5) * 0.02
        if (Math.abs(particle.vy) < 0.1) particle.vy += (Math.random() - 0.5) * 0.02
      })
    },

    drawParticles() {
      this.particles.forEach(particle => {
        this.ctx.save()

        // 粒子发光效果
        this.ctx.shadowColor = particle.color
        this.ctx.shadowBlur = 10

        this.ctx.globalAlpha = particle.opacity
        this.ctx.fillStyle = particle.color
        this.ctx.beginPath()
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        this.ctx.fill()

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
            this.ctx.globalAlpha = opacity * 0.3
            this.ctx.lineWidth = 1
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
          this.ctx.globalAlpha = opacity * 0.6
          this.ctx.lineWidth = 2
          this.ctx.beginPath()
          this.ctx.moveTo(this.mouse.x, this.mouse.y)
          this.ctx.lineTo(particle.x, particle.y)
          this.ctx.stroke()
          this.ctx.restore()
        }
      })
    },

    animate() {
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
      const rect = this.canvas.getBoundingClientRect()
      this.mouse.x = event.clientX - rect.left
      this.mouse.y = event.clientY - rect.top
    },

    handleMouseLeave() {
      this.mouse.x = null
      this.mouse.y = null
    },

    handleResize() {
      this.resizeCanvas()
      this.createParticles()
    }
  }
}
</script>

<style scoped>
.particle-container {
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

/* 移动设备优化 */
@media (max-width: 768px) {
  .particle-container {
    display: none;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .particle-container {
    display: none;
  }
}
</style>
