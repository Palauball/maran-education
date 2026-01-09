import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">马然留学 <span className="logo-en">maran education</span></h3>
          <p className="footer-description">
            专注于为中国学生提供专业的留学咨询服务，
            助力每一位学子实现海外求学梦想。
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="微信">微信</a>
            <a href="#" className="social-link" aria-label="微博">微博</a>
            <a href="#" className="social-link" aria-label="小红书">小红书</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>快速链接</h4>
          <ul className="footer-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#services">服务项目</a></li>
            <li><a href="#cases">成功案例</a></li>
            <li><a href="#teachers">师资团队</a></li>
            <li><a href="#about">关于我们</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>服务项目</h4>
          <ul className="footer-links">
            <li><a href="#">文书指导</a></li>
            <li><a href="#">整体规划</a></li>
            <li><a href="#">背景提升</a></li>
            <li><a href="#">课外辅导</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>联系我们</h4>
          <ul className="footer-contact">
            <li>邮箱: palauball@outlook.com</li>
            <li>工作时间: 周一至周日 9:00-21:00</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 马然留学 maran education. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;

