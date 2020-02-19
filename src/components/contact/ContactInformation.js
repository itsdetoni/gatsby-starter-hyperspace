import React from 'react';

const ContactInformation = () => (
  <section>
    <ul className="contact">
      <li>
        <h3>E-mail</h3>
        <a href="mailto:hi@growthmedia.com.br">hi@growthmedia.com.br</a>
      </li>
      <li>
        <h3>WhatsApp</h3>
        <a href="https://wa.me/5511981819176">(11) 98181-9176</a>
      </li>
      <li>
        <h3>Redes Sociais</h3>
        <ul className="icons">
          <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

export default ContactInformation;
