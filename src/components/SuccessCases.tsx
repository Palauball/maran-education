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
      name: 'M同学',
      university: 'University of Michigan--Ann Arbor',
      major: 'College of Engineering',
      year: '2030',
      logo: 'https://1000logos.net/wp-content/uploads/2018/08/University-of-Michigan-Logo.png',
      quote: '对比过几家，马然留学给人的感觉最稳，老师对学校和项目细节很熟，不只是看排名。',
      achievement: ''
    },
    {
      name: 'Z同学',
      university: 'University of Hong Kong',
      major: 'Mechanical Engineering',
      year: '2030',
      logo: 'https://foa-media.arch.hku.hk/media/upload/hku-logo-color1-1770x2000.png',
      quote: '马然留学是真的专业，不是套模板那种。选校和文书每一步都有理由，能感觉到老师很懂项目。',
      achievement: ''
    }
    ,
    {
      name: 'L同学',
      university: 'Ohio State University',
      major: 'Sociology',
      year: '2030',
      logo: 'https://ascintranet.osu.edu/themes/custom/asc_bootstrap_bux/images/osu-logos/navbar/osu-navbar.svg',
      quote: '非常优秀的机构老师们, 尤其是文书指导老师! 太专业了!',
      achievement: ''
    }
  ];

  const universityNames = Array.from(new Set(cases.map((caseItem) => caseItem.university)));
  const offerCount = cases.length;
  const tickerItems = [...universityNames, ...universityNames];
  const tickerRows = [0, 1, 2];

  return (
    <section className="success-cases" id="cases">
      <div className="container">
        <div className="cases-ticker" aria-label="录取大学滚动列表">
          {tickerRows.map((rowIndex) => (
            <div className="cases-ticker-row" key={`ticker-row-${rowIndex}`}>
              <div
                className={`cases-ticker-track ${rowIndex % 2 === 1 ? 'is-reverse' : ''} ${
                  rowIndex === 0 ? 'speed-fast' : rowIndex === 1 ? 'speed-medium' : 'speed-slow'
                }`}
              >
                {tickerItems.map((university, index) => (
                  <span
                    className="cases-ticker-item"
                    key={`${university}-${rowIndex}-${index}`}
                  >
                    {university}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
            <div className="stat-number">{offerCount}</div>
            <div className="stat-label">成功案例</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;

