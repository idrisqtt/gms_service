import React from 'react';

const Trust = () => {
  const items = [
    { icon: "🏛️", title: "Government-level Solutions", text: "Решения государственного уровня, применяемые правоохранительными органами и спецслужбами Кыргызской Республики." },
    { icon: "🔒", title: "Конфиденциальность данных", text: "Абсолютная конфиденциальность. Строгие протоколы защиты информации и полное соответствие законодательству КР." },
    { icon: "⚖️", title: "Legal-grade Evidence", text: "Все результаты соответствуют требованиям доказательной базы. Экспертные заключения принимаются судами." }
  ];

  return (
    <section id="trust">
      <div className="section-wrap">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ display: 'inline-flex' }}>Наши гарантии</div>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>Надёжность на каждом уровне</h2>
        </div>
        <div className="trust-grid">
          {items.map((item, i) => (
            <div key={i} className={`trust-item reveal d${i}`}>
              <div className="ti-icon">{item.icon}</div>
              <div className="ti-title">{item.title}</div>
              <p className="ti-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
