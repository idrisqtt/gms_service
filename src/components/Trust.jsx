import React from 'react';

const Trust = () => {
  return (
    <section id="trust">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// TRUST_INDICATORS</span>
          <h2 className="section-title">Гарантии и стандарты</h2>
          <div className="section-line"></div>
        </div>
        <div className="trust-grid">
          <div className="trust-item reveal">
            <div className="trust-icon">🏛️</div>
            <div className="trust-title">Government-level Solutions</div>
            <p className="trust-desc">Решения государственного уровня, используемые правоохранительными органами Кыргызской Республики.</p>
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <div className="trust-icon">🔒</div>
            <div className="trust-title">Data Confidentiality</div>
            <p className="trust-desc">Абсолютная конфиденциальность данных. Строгое соблюдение протоколов защиты информации.</p>
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <div className="trust-icon">⚖️</div>
            <div className="trust-title">Legal-grade Evidence</div>
            <p className="trust-desc">Результаты соответствуют требованиям доказательной базы для судебных разбирательств.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
