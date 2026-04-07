import React from 'react';
import mkImage from '../assets/product_mk.png';

const Partners = () => {
  return (
    <section id="partners">
      <div className="section-wrap">
        <div className="partners-inner">
          <div className="reveal">
            <div className="section-tag">Наши партнеры</div>
            <h2 className="section-title">Мобильный Криминалист<br/>Эксперт Плюс</h2>
            <p className="partners-desc">
              ОсОО «Гарант Монтаж Сервис» является партнером ведущего программного комплекса <strong>«Мобильный Криминалист Эксперт Плюс»</strong>. 
            </p>
            <p className="partners-desc">
              Это передовое профессиональное решение для извлечения, расшифровки и глубокого анализа цифровых доказательств. Система обеспечивает безопасный сбор данных с мобильных устройств, SIM-карт, дронов, облачных хранилищ и персональных компьютеров. Уникальные алгоритмы позволяют восстанавливать удаленные файлы, анализировать связи и формировать юридически значимые экспертные отчеты.
            </p>
            <div className="client-chips" style={{ marginTop: '24px' }}>
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Мобильные устройства
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Облачные сервисы
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Экспертные отчеты
              </div>
            </div>
          </div>
          <div className="reveal d1">
            <div className="partners-img-wrap">
              <img
                src={mkImage}
                alt="Интерфейс программы Мобильный Криминалист Эксперт Плюс"
                loading="lazy"
              />
              <div className="partners-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
