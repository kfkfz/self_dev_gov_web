// 滚动性能优化插件
export default ({ app }, inject) => {
  if (process.client) {
    // 优化滚动性能
    const optimizeScroll = () => {
      // 设置CSS滚动行为
      document.documentElement.style.scrollBehavior = 'smooth'

      // 为所有锚点链接添加平滑滚动
      const anchorLinks = document.querySelectorAll('a[href^="#"]')

      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href')
          if (href === '#') return

          const target = document.querySelector(href)
          if (target) {
            e.preventDefault()

            // 计算目标位置（考虑固定导航栏）
            const navHeight = 70
            const targetPosition = target.offsetTop - navHeight

            // 使用原生smooth滚动
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        })
      })

      // 优化滚动事件监听
      let ticking = false
      const scrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // 这里可以添加自定义滚动逻辑
            ticking = false
          })
          ticking = true
        }
      }

      // 使用passive事件监听器提升性能
      window.addEventListener('scroll', scrollHandler, {
        passive: true,
        capture: false
      })

      // 移动端滚动优化
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch'
        document.body.style.overscrollBehavior = 'none'
      }
    }

    // 在DOM加载完成后执行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeScroll)
    } else {
      optimizeScroll()
    }
  }
}
