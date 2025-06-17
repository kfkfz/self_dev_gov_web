import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }, inject) => {
  // 初始化 AOS
  app.AOS = AOS.init({
    offset: 200, // 触发动画的滚动偏移
    delay: 0, // 动画延迟时间
    duration: 1000, // 动画持续时间
    easing: 'ease-in-out',
  });
};
