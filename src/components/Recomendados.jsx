import React from 'react';
import { Link } from 'react-router-dom'; 
import { MdSelfImprovement } from 'react-icons/md';
import { FaUsers, FaTrophy } from 'react-icons/fa'; 
import './Recomendados.css';

function Recomendados() {
  return (
    <section className="recomendados-container">
      
      <div className="recomendados-header">
        <h3 className="recomendados-titulo">Recomendados</h3>
        <Link to="/todos" className="recomendados-ver-todas">
          Ver todas
        </Link>
      </div>
      <nav className="recomendados-lista">
        
        <Link to="/respiracao" className="recomendados-item">
          <MdSelfImprovement className="recomendados-icone" />
          <span>EXERCÍCIO DE RESPIRAÇÃO</span>
        </Link>

        <Link to="/mural" className="recomendados-item">
          <FaUsers className="recomendados-icone" />
          <span>COMUNIDADE ANÔNIMA</span>
        </Link>
        
        <Link to="/conquistas" className="recomendados-item">
          <FaTrophy className="recomendados-icone" />
          <span>MINHAS CONQUISTAS</span>
        </Link>

      </nav>

    </section>
  );
}

export default Recomendados;