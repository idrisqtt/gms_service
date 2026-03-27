import React from 'react';

const Services = () => {
  const services = [
    {
      id: "MODULE_01",
      title: "Цифровая криминалистика",
      desc: "Профессиональное извлечение и анализ данных с мобильных устройств, компьютеров и облачных хранилищ.",
      features: ["Извлечение данных с iOS, Android, Windows", "Восстановление удалённых файлов", "Анализ зашифрованных хранилищ", "Экспертные заключения"],
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      )
    },
    {
      id: "MODULE_02",
      title: "Обучение и сертификация",
      desc: "Подготовка специалистов в области цифровой криминалистики и кибербезопасности.",
      features: ["Курсы для правоохранительных органов", "Корпоративные тренинги по ИБ", "Практические лабораторные занятия", "Международная сертификация"],
      delay: "reveal-delay-1",
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: "MODULE_03",
      title: "Системы безопасности",
      desc: "Комплексные решения физической и информационной безопасности.",
      features: ["Системы видеонаблюдения и СКУД", "Защита периметра и сигнализация", "Интеграция с SIEM-системами", "Техническая поддержка"],
      delay: "reveal-delay-2",
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      id: "MODULE_04",
      title: "Радиомониторинг",
      desc: "Профессиональный мониторинг радиочастотного пространства, обнаружение передатчиков.",
      features: ["Сканирование радиодиапазона", "Обнаружение прослушивающих устройств", "Анализ радиопомех", "Защита переговорных комнат"],
      delay: "reveal-delay-3",
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// SYSTEM_MODULES</span>
          <h2 className="section-title">Направления деятельности</h2>
          <div className="section-line"></div>
        </div>
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className={`svc-card reveal ${svc.delay || ""}`}>
              <div className="svc-module"><span className="svc-module-dot"></span>{svc.id}</div>
              <div className="svc-icon">{svc.icon}</div>
              <div className="svc-title">{svc.title}</div>
              <p className="svc-desc">{svc.desc}</p>
              <ul className="svc-features">
                {svc.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
