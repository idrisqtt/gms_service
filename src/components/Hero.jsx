import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="reveal">
        <div className="hero-eyebrow">Кыргызстан · с 2021 года</div>
        <h1 className="hero-title">Цифровая<br />криминалистика<br />и <em>системы<br />безопасности</em></h1>
        <p className="hero-sub">Профессиональные решения для государственных структур, правоохранительных органов и корпоративного сектора Кыргызстана.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Получить консультацию
            <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#directions" className="btn-outline">Наши направления</a>
        </div>
      </div>
      <div className="hero-img-wrap reveal d2">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format&fit=crop"
          alt="Цифровая криминалистика"
          loading="eager"
        />
        <div className="hero-img-badge">
          <div className="hib-icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hib-text"><strong>Государственный уровень</strong>защиты данных</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
