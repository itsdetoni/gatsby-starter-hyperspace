import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>GROWTH MEDIA</h1>
      <p>
        Somos uma agência de resultados. Ajudamos sua empresa a crescer
        <br></br>
        através de estratégias digitais centradas no consumidor moderno.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Portfólio
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Introduction;
