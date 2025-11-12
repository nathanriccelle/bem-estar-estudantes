import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Conquistas.css";
import Header from "./header"; 
import { FaFire, FaBrain, FaHeart, FaLock, FaWind } from "react-icons/fa";

export default function Conquistas() {
 const { respiracaoCount, muralCount } = useContext(UserContext);

  const conquistasDefinidas = [
    { 
      id: 1, 
      icon: <FaBrain />, 
      title: "Mente consciente", 
      desbloqueada: true
    },
    { 
      id: 2, 
      icon: <FaWind />, 
      title: "Pausa para respirar", 
      desbloqueada: respiracaoCount > 0 
    },
    { 
      id: 3, 
      icon: <FaHeart />, 
      title: "Pilar da comunidade", 
      desbloqueada: muralCount > 0 
    },
    { id: 4, desbloqueada: false },
    { id: 5, desbloqueada: false },
    { id: 6, desbloqueada: false },
    { id: 7, desbloqueada: false },
    { id: 8, desbloqueada: false },
    { id: 9, desbloqueada: false },
  ];

 return (

   <div className="conquistas-fundo">

     <div className="conquistas-celular-box">
        <Header /> 


     <main className="conquistas-conteudo">
          <h1 className="conquistas-titulo">Minhas Conquistas</h1>
          
          <section className="conquistas-status-container">

            <div className="conquistas-status-item">
              <FaFire className="conquistas-status-icone" />
              <span>14 Dias seguidos</span>
            </div>

            <div className="conquistas-status-item">
              <span>Nível 12: Mente consciente</span>
              <div className="conquistas-xp-bar-container">

                <div 
                  className="conquistas-xp-bar-progresso" 
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </section>

          <section className="conquistas-grelha-container">
            <h2 className="conquistas-subtitulo">Conquistas</h2>
            
            <div className="conquistas-grelha">
              {conquistasDefinidas.map((conquista) => (
                <div 
                  key={conquista.id} 
                  className={`conquistas-badge ${conquista.desbloqueada ? 'desbloqueado' : 'bloqueado'}`}
                >
                  <div className="conquistas-badge-icone">
                    {conquista.desbloqueada ? conquista.icon : <FaLock />}
                  </div>
                  
                  {conquista.desbloqueada && 
                    <span>{conquista.title}</span>
                  }
                </div>
              ))}
            </div>
          </section>

       </main>
     </div>
     </div>
   );
}