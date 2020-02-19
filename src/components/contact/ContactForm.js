import React from 'react';

const ContactForm = () => (
  <section>
    <form method="post" data-netlify="true">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <a href="/#" className="button submit">
            Enviar Mensagem
          </a>
        </li>
      </ul>
    </form>
  </section>
);

export default ContactForm;
