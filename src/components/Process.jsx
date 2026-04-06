import React from 'react';

const Process = () => {
  const steps = [
    { num: "01", title: "Сбор данных", text: "Криминалистически корректное изъятие носителей. Документирование цепочки хранения. Сохранение целостности доказательств." },
    { num: "02", title: "Анализ", text: "Глубокий анализ данных. Восстановление удалённых файлов. Выявление скрытых артефактов и аномалий." },
    { num: "03", title: "Обнаружение", text: "Идентификация угроз и улик. Корреляция событий. Построение временных линий и карт связей." },
    { num: "04", title: "Заключение", text: "Экспертные отчёты для суда и следствия. Юридически значимая документация. Полная доказательная база." }
  ];

  return (
    <section id="process">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Как мы работаем</div>
          <h2 className="section-title">Процесс работы</h2>
          <p className="section-desc">От первого запроса до готового результата — чёткий и прозрачный процесс на каждом этапе.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={i} className={`ps reveal d${i}`}>
              <div className="ps-num">Шаг {step.num}</div>
              <div className="ps-title">{step.title}</div>
              <p className="ps-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
