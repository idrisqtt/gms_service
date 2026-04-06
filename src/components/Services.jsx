import React from 'react';

const Services = () => {
  const services = [
    {
      id: "01 · Криминалистика",
      title: "Цифровая криминалистика",
      text: "Современные решения для извлечения, анализа и документирования цифровой информации с любых типов носителей.",
      icon: (
        <svg viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      class: "c-blue",
      iconClass: "blue"
    },
    {
      id: "02 · Обучение",
      title: "Обучение и повышение квалификации",
      text: "Обучение и повышение квалификации по направлениям цифровой криминалистики для специалистов и ведомств.",
      icon: (
        <svg viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      class: "c-purple",
      iconClass: "purple",
      delay: "d1"
    },
    {
      id: "03 · Безопасность",
      title: "Системы безопасности",
      text: "Установка и обслуживание комплексных систем безопасности: видеонаблюдение, СКУД, охранная сигнализация.",
      icon: (
        <svg viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      class: "c-green",
      iconClass: "green",
      delay: "d2"
    },
    {
      id: "04 · Радиомониторинг",
      title: "Радиомониторинг",
      text: "Современные технологии поиска и анализа несанкционированных излучений. Защита от технической разведки.",
      icon: (
        <svg viewBox="0 0 24 24"><path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      class: "c-navy",
      iconClass: "navy",
      delay: "d3"
    }
  ];

  return (
    <section id="services">
      <div className="section-wrap">
        <div className="svc-header">
          <div className="reveal">
            <div className="section-tag">Все услуги</div>
            <h2 className="section-title">Что мы делаем</h2>
          </div>
          <p className="section-desc reveal d1" style={{ maxWidth: '360px' }}>Четыре направления деятельности, покрывающих полный цикл цифровой безопасности.</p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className={`svc-card ${svc.class} reveal ${svc.delay || ""}`}>
              <div className={`svc-icon ${svc.iconClass}`}>
                {svc.icon}
              </div>
              <div className="svc-num">{svc.id}</div>
              <div className="svc-title">{svc.title}</div>
              <p className="svc-text">{svc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
