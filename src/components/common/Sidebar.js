import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Início', href: 'intro' },
    { content: 'Sobre', href: 'one' },
    { content: 'Soluções', href: 'two' },
    { content: 'Contato', href: 'three' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => (
              <Tab key={tab.href} {...tab} />
            ))}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
