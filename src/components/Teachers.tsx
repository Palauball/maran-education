import { useState, useEffect, useRef } from 'react';
import './Teachers.css';

const Teachers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const teachers = [
    {
      name: 'Max老师',
      title: '金牌🏅顾问',
      expertise: '美国芝加哥大学本科录取',
      experience: '1年留学咨询经验',
      image: 'https://placehold.co/400',
      description: '，深谙美国顶尖院校录取标准，成功帮助300+学生进入藤校。',
      achievements: ['']
    },
    {
      name: 'Asa老师',
      title: '马然留学创始人',
      expertise: 'Emory University本科录取',
      experience: '0.1年指导经验',
      image: 'https://placehold.co/400',
      description: '',
      achievements: ['']
    },
    {
      name: 'Annie老师',
      title: '文书顾问',
      expertise: '人设打造专家',
      experience: '0.1年留学咨询经验',
      image: 'https://placehold.co/400',
      description: 'Annie在美国的艺术与教育行业工作了12年，她非常善于引导学生发掘自己的兴趣，并且帮助其最大化展现特质与个人风格，从而从众多申请者中脱引而出，与学生总是亦师亦友的关系，在本次申请季中主要帮助C同学完成难度极高的Wesleyan University文理学院的申请。',
      achievements: ['']
    },
    {
      name: 'Sabrina老师',
      title: '战略发展顾问',
      expertise: '长期发展设计',
      experience: '0.1年留学咨询经验',
      image: 'https://placehold.co/400',
      description: '从整体与长期视角参与升学发展规划，关注教育理念、项目结构与学生发展路径的协调统一。通过研判国际教育环境与留学趋势，协助学生找寻个人兴趣，明确发展方向与阶段性重点。在以学生为中心的前提下，推动世界公民的全面发展。',
      achievements: ['']
    }
    
  ];

  const itemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = teachers.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, teachers.length, itemsPerView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const maxIndex = teachers.length - itemsPerView;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = teachers.length - itemsPerView;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="teachers" id="teachers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">师资团队</h2>
          <p className="section-subtitle">汇聚行业顶尖专家，为你的留学梦想护航</p>
        </div>

        <div className="teachers-slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="上一位">
            ‹
          </button>

          <div className="teachers-slider" ref={sliderRef}>
            <div
              className="teachers-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {teachers.map((teacher, index) => (
                <div key={index} className="teacher-card">
                  <div className="teacher-image-wrapper">
                    <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                    <div className="teacher-overlay">
                      <p className="teacher-description">{teacher.description}</p>
                    </div>
                  </div>
                  <div className="teacher-info">
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-title">{teacher.title}</p>
                    <p className="teacher-expertise">{teacher.expertise}</p>
                    <p className="teacher-experience">{teacher.experience}</p>
                    <div className="teacher-achievements">
                      {teacher.achievements.map((achievement, idx) => (
                        <span key={idx} className="achievement-badge">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide} aria-label="下一位">
            ›
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: teachers.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`转到第 ${index + 1} 组`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;

