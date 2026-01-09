import { useState } from 'react';
import './SuccessCases.css';

const SuccessCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      name: 'C同学',
      university: 'Wesleyan University',
      major: 'Creative Writing',
      year: '2030',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2022/04/wesleyan_cardinals_logo_freelogovectors.net_.png',
      quote: '感谢马然留学团队的专业指导，从文书撰写到面试准备，每一步都给予了我最大的帮助。',
      achievement: 'TOEFL 105+ | 无SAT'
    },
    {
      name: 'C同学',
      university: 'Wesleyan University',
      major: 'Creative Writing',
      year: '2030',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2022/04/wesleyan_cardinals_logo_freelogovectors.net_.png',
      quote: '感谢马然留学团队的专业指导，从文书撰写到面试准备，每一步都给予了我最大的帮助。',
      achievement: 'TOEFL 105+ | 无SAT'
    },
    {
      name: 'C同学',
      university: 'Wesleyan University',
      major: 'Creative Writing',
      year: '2030',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2022/04/wesleyan_cardinals_logo_freelogovectors.net_.png',
      quote: '感谢马然留学团队的专业指导，从文书撰写到面试准备，每一步都给予了我最大的帮助。',
      achievement: 'TOEFL 105+ | 无SAT'
    }
  ];

  return (
    <section className="success-cases" id="cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">成功案例</h2>
          <p className="section-subtitle">他们的成功，将是你的未来</p>
        </div>

        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`case-card ${activeCase === index ? 'active' : ''}`}
              onClick={() => setActiveCase(index)}
            >
              <div className="case-logo-wrapper">
                <img 
                  src={caseItem.logo || 'https://via.placeholder.com/200x100?text=University+Logo'} 
                  alt={caseItem.university}
                  className="case-logo"
                  onError={(e) => {
                    // 如果logo加载失败，使用占位符
                    e.currentTarget.src = 'https://via.placeholder.com/200x100?text=University+Logo';
                  }}
                />
              </div>
              <div className="case-content">
                <div className="case-header">
                  <h3 className="case-name">{caseItem.name}</h3>
                  <span className="case-year">{caseItem.year}届</span>
                </div>
                <div className="case-university">{caseItem.university}</div>
                <p className="case-major">{caseItem.major}</p>
                <p className="case-achievement">{caseItem.achievement}</p>
                <div className="case-quote">
                  <i className="quote-icon">"</i>
                  <p>{caseItem.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">录取成功率</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">合作院校</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0.1年</div>
            <div className="stat-label">行业经验</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">成功案例</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;

