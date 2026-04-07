import React from 'react';
import expertPlusImg from '../assets/product_mk.png';
import desktopImg from '../assets/product_desktop.png';

const Partners = () => {
  return (
    <section id="partners">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Наши партнеры</div>
          <h2 className="section-title">Партнерские программные решения</h2>
          <p className="section-desc">ОсОО «Гарант Монтаж Сервис» предлагает передовые инструменты для комплексной цифровой экспертизы.</p>
        </div>

        <div className="partners-grid" style={{ marginTop: '56px' }}>
          {/* MK Expert Plus */}
          <div className="partner-product reveal">
            <div className="pp-content">
              <h3 className="pp-title">«МК ЭКСПЕРТ ПЛЮС»</h3>
              <p className="pp-text">
                «МК Эксперт Плюс» разработан для проведения комплексной цифровой экспертизы данных из мобильных устройств, облачных сервисов, дронов и персональных компьютеров. Извлекайте, сохраняйте и анализируйте информацию с помощью самых передовых инструментов, предоставляемых нашим комплексом. Возможности программы позволяют в кратчайшие сроки найти важные цифровые следы для последующего предоставления их в суде.
              </p>
              <div className="client-chips" style={{ marginTop: '24px' }}>
                <div className="chip">Смартфоны</div>
                <div className="chip">Облака</div>
                <div className="chip">Дроны</div>
              </div>
            </div>
            <div className="pp-image">
              <img src={expertPlusImg} alt="МК Эксперт Плюс" loading="lazy" />
              <div className="pp-accent"></div>
            </div>
          </div>

          {/* MK Desktop */}
          <div className="partner-product reverse reveal d1">
            <div className="pp-content">
              <h3 className="pp-title">«МК ДЕСКТОП»</h3>
              <p className="pp-text">
                «МК Десктоп» — современный многофункциональный инструмент, который позволяет извлекать, расшифровывать и анализировать ключевые данные из ПК, ноутбуков и серверов, работающих под управлением операционных систем Windows, macOS, GNU/Linux, а также из внешних дисков, образов жестких дисков, виртуальных машин и др.
              </p>
              <div className="client-chips" style={{ marginTop: '24px' }}>
                <div className="chip">Windows & MacOS</div>
                <div className="chip">Linux</div>
                <div className="chip">Серверы</div>
              </div>
            </div>
            <div className="pp-image">
              <img src={desktopImg} alt="МК Десктоп" loading="lazy" />
              <div className="pp-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
