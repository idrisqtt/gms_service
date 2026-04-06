import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">ОсОО «Гарант Монтаж Сервис»</div>
            <div className="footer-tagline">Цифровая криминалистика · Системы безопасности · Кыргызстан</div>
          </div>
          <nav className="footer-links">
            <a href="#directions">Направления</a>
            <a href="#services">Услуги</a>
            <a href="#about">О компании</a>
            <a href="#contact">Контакты</a>
          </nav>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
            <div style={{ color: '#fff', fontWeight: 600, marginBottom: '6px' }}>Контакты</div>
            <a href="tel:+996312000000" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'block' }}>+996 (312) 00-00-00</a>
            <a href="mailto:info@gms-service.kg" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>info@gms-service.kg</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ОсОО «Гарант Монтаж Сервис». Все права защищены.</span>
          <span>Кыргызская Республика, г. Бишкек</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
