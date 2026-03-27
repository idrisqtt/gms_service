import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">ГМС <span>/ GMS</span></div>
      <ul className="nav-links">
        <li><a href="#services">Модули</a></li>
        <li><a href="#products">Продукты</a></li>
        <li><a href="#process">Процесс</a></li>
        <li><a href="#contact">Контакт</a></li>
      </ul>
      <div className="nav-status">
        <div className="status-dot"></div>
        SYSTEM ONLINE
      </div>
    </nav>
  );
};

export default Nav;
