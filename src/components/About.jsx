import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="about-inner">
          <div className="reveal">
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80&auto=format&fit=crop"
                alt="Команда специалистов ГМС"
                style={{ width: '100%', display: 'block', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
                loading="lazy"
              />
              <div className="about-accent"></div>
            </div>
          </div>
          <div className="reveal d1">
            <div className="section-tag">О компании</div>
            <h2 className="section-title">ОсОО «Гарант Монтаж Сервис»</h2>
            <p>Специализированная компания в области цифровой криминалистики, технической безопасности и внедрения современных решений для работы с цифровой информацией.</p>
            <p style={{ marginBottom: '36px' }}>Компания осуществляет деятельность на территории Кыргызстана и ориентирована на работу с государственными структурами, правоохранительными органами и корпоративным сектором.</p>
            <a href="#contact" className="btn-primary" style={{ marginBottom: '32px' }}>
              Связаться с нами
              <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="client-chips">
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Госструктуры
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Правоохранительные органы
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Корпоративный сектор
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
