import React from 'react';
import HeroBg from './HeroBg';
import Terminal from './Terminal';

const Hero = () => {
  return (
    <section id="hero">
      <HeroBg />
      <div className="hero-grid-overlay"></div>
      <div className="hero-content">
        <div>
          <div className="hero-badge"><span className="hero-badge-dot"></span> FORENSIC INTELLIGENCE PLATFORM v3.1</div>
          <h1 className="hero-h1">
            <span className="line"><span>Цифровая</span></span>
            <span className="line"><span>криминалистика</span></span>
            <span className="line"><span>и системы <em className="highlight">безопасности</em></span></span>
          </h1>
          <div className="hero-sub">Extract · Analyze · Protect</div>
          <p className="hero-desc">Профессиональные решения для извлечения цифровых данных, анализа угроз и защиты информации. Государственный уровень надёжности. Юридически значимые результаты.</p>
          <a href="#contact" className="hero-cta">
            <svg viewBox="0 0 24 24" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Получить консультацию
          </a>
        </div>
        <Terminal />
      </div>
    </section>
  );
};

export default Hero;
