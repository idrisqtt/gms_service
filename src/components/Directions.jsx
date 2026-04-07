import React from 'react';
import forensicsImg from '../assets/forensics.png';

const Directions = () => {
  return (
    <section id="directions">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Два ключевых направления</div>
          <h2 className="section-title">Специализация компании</h2>
          <p className="section-desc">Мы работаем в двух независимых, но взаимодополняющих сферах — каждая со своей экспертизой и командой специалистов.</p>
        </div>
        <div className="dir-grid">
          <div className="dir-card reveal d1">
            <div className="dir-img">
              <img
                src={forensicsImg}
                alt="Цифровая криминалистика — анализ данных"
                loading="lazy"
              />
            </div>
            <div className="dir-body">
              <div className="dir-tag blue">Направление 01</div>
              <h3 className="dir-title">Цифровая<br />криминалистика</h3>
              <p className="dir-text">Современные решения для извлечения, анализа и документирования цифровой информации. Работаем с мобильными устройствами, компьютерными носителями и облачными данными. Юридически значимые результаты для суда и следствия.</p>
              <a href="#services" className="dir-link blue">
                Подробнее об услугах
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          <div className="dir-card reveal d2">
            <div className="dir-img">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
                alt="Установка и обслуживание систем безопасности"
                loading="lazy"
              />
            </div>
            <div className="dir-body">
              <div className="dir-tag green">Направление 02</div>
              <h3 className="dir-title">Установка и обслуживание комплексных систем безопасности</h3>
              <p className="dir-text">Проектирование, монтаж и сервисное обслуживание систем физической и технической защиты объектов. Видеонаблюдение, контроль доступа, охранная сигнализация и защита от несанкционированного мониторинга.</p>
              <a href="#services" className="dir-link green">
                Подробнее об услугах
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
