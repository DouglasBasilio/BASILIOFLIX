import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/douglas-basilio-dos-santos-62017144/"  target="_blank">
        <img src="https://i.imgur.com/8twm9Tu.png" width="30%" alt="Logo Douglas Basilio"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6693878140265107457/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
