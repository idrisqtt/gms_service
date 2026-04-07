import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-brand">
        <div className="nav-badge">ГМС</div>
        Гарант Монтаж Сервис
      </a>
      <ul className="nav-links">
        <li><a href="#directions">Направления</a></li>
        <li><a href="#services">Услуги</a></li>
        <li><a href="#about">О компании</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Получить консультацию</a>
    </nav>
  );
};

export default Nav;
