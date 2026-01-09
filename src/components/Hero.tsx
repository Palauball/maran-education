import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: '开启你的国际教育之旅',
      subtitle: '专业团队助你圆梦世界名校',
      description: '10年留学咨询经验，98%成功录取率'
    },
    {
      title: '量身定制留学方案',
      subtitle: '从规划到申请全程护航',
      description: '一对一专属顾问，全方位留学服务'
    },
    {
      title: '汇聚顶尖名校资源',
      subtitle: '连接全球教育机会',
      description: '合作院校超过500所，覆盖热门留学国家'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(${index % 2 === 0 ? '49, 191, 235' : '242, 219, 15'}, 0.7), rgba(${index % 2 === 0 ? '49, 191, 235' : '242, 219, 15'}, 0.5)), 
                               url('https://images.unsplash.com/photo-${1523050854058 + index * 100000}-fba2ab96e3a?w=1920&h=1080&fit=crop')`
            }}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-buttons">
                <button className="hero-btn primary">免费咨询</button>
                <button className="hero-btn secondary">了解更多</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`转到幻灯片 ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

