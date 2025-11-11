import React from 'react';
import { FaBars, FaBell } from 'react-icons/fa'; 
import './header.css';

function Header() {
  return (
    <header className="cabecalho-container">
      
      <button className="cabecalho-botao-icone">
        <FaBars />
      </button>

      <button className="cabecalho-botao-icone">
        <FaBell />
      </button>

    </header>
  );
}

export default Header;