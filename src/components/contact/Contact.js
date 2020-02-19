import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () => (
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Entre em contato</h2>
      <p>
        Preencha o formulário abaixo para receber um orçamento{' '}
        <b>100% gratuito e sem compromisso</b>. Iremos avaliar o seu negócio e
        levantar os principais pontos de melhoria em relação à sua presença
        digital.
      </p>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>
);

export default Contact;
