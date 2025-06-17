import SmoothScroll from 'smooth-scroll';

export default ({ app }, inject) => {
  inject('smoothScroll', new SmoothScroll('a[href*="#"]', {
    speed: 800, // 滚动速度（单位：ms）
    offset: 0,  // 偏移量
    easing: 'easeInOutCubic', // 缓动效果
  }));
};
