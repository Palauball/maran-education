import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>马然留学 <span className="logo-en">maran education</span></h2>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-item">首页</a>
          <a href="#services" className="navbar-item">服务项目</a>
          <a href="#cases" className="navbar-item">成功案例</a>
          <a href="#teachers" className="navbar-item">师资团队</a>
          <a href="#location" className="navbar-item">位置</a>
          <a href="#contact" className="navbar-item navbar-cta">联系我们</a>
        </div>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

