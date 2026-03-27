import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// SECURE_ACCESS</span>
          <h2 className="section-title">Связаться с нами</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <h3>ОсОО «Гарант Монтаж Сервис»</h3>
            <p>Ведущая компания Кыргызстана в области цифровой криминалистики и комплексных систем безопасности.</p>
            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-key">ENTITY</span>
                <span className="contact-val">ОсОО «Гарант Монтаж Сервис»</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">PHONE</span>
                <span className="contact-val">
                  <a href="tel:+996312000000">+996 (312) 00-00-00</a><br />
                  <a href="tel:+996700000000">+996 (700) 000-000</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-key">EMAIL</span>
                <span className="contact-val">
                  <a href="mailto:info@gms.kg">info@gms.kg</a><br />
                  <a href="mailto:forensics@gms.kg">forensics@gms.kg</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-key">GEO</span>
                <span className="contact-val">Кыргызская Республика, г. Бишкек</span>
              </div>
            </div>
          </div>
          <div className="form-box reveal reveal-delay-1">
            <div className="form-header">
              <span>ACCESS REQUEST</span>
              <span className="form-id">// REQ-2024-SECURE</span>
            </div>
            {!submitted ? (
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">// NAME_FIELD</label>
                  <input className="form-input" type="text" id="name" name="name" placeholder="Ваше имя и должность" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">// EMAIL_FIELD</label>
                  <input className="form-input" type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">// MESSAGE_FIELD</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Опишите вашу задачу или запрос..." required></textarea>
                </div>
                <button type="submit" className="form-submit"><span>SUBMIT REQUEST →</span></button>
              </form>
            ) : (
              <div className="form-success" style={{ display: 'block' }}>
                <div style={{ color: 'var(--accent-ok)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
                REQUEST SUBMITTED SUCCESSFULLY<br />
                <span style={{ color: 'var(--text-dim)' }}>Мы свяжемся с вами в ближайшее время</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
