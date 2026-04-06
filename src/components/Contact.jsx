import React from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="contact-inner">
          <div className="reveal">
            <h2>Свяжитесь<br />с нами</h2>
            <p>Расскажите о вашей задаче — мы подберём оптимальное решение и ответим в ближайшее рабочее время.</p>
            <div>
              <div className="cd-row">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="cd-label">Компания</div>
                  <div className="cd-val">ОсОО «Гарант Монтаж Сервис»</div>
                </div>
              </div>
              <div className="cd-row">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="cd-label">Телефон</div>
                  <div className="cd-val">
                    <a href="tel:+996312000000">+996 (312) 00-00-00</a><br />
                    <a href="tel:+996700000000">+996 (700) 000-000</a>
                  </div>
                </div>
              </div>
              <div className="cd-row">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="cd-label">Email</div>
                  <div className="cd-val">
                    <a href="mailto:info@gms-service.kg">info@gms-service.kg</a>
                  </div>
                </div>
              </div>
              <div className="cd-row">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="cd-label">Адрес</div>
                  <div className="cd-val">Кыргызская Республика, г. Бишкек</div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-box reveal d1">
            {!submitted ? (
              <>
                <h3>Оставить заявку</h3>
                <p className="form-sub">Ответим в течение рабочего дня</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fname">Ваше имя и должность</label>
                    <input className="form-input" type="text" id="fname" placeholder="Иван Петров, Следователь" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="femail">Email</label>
                    <input className="form-input" type="email" id="femail" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fmsg">Ваш запрос</label>
                    <textarea className="form-textarea" id="fmsg" placeholder="Опишите вашу задачу..." required></textarea>
                  </div>
                  <button type="submit" className="form-submit">Отправить заявку →</button>
                </form>
              </>
            ) : (
              <div className="form-success">
                <div className="fs-icon">✅</div>
                <div className="fs-title">Заявка отправлена!</div>
                <p className="fs-text">Мы свяжемся с вами в ближайшее рабочее время.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
