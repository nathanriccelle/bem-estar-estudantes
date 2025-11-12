import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Respiracao.css";
import { MdSelfImprovement } from "react-icons/md"; 
// 1. IMPORTAR O CABEÇALHO (que fizemos antes)
import Cabecalho from "./header"; 

export default function Respiracao() {
 const { setRespiracaoCount } = useContext(UserContext);
 const [tempo, setTempo] = useState(60);
 const [ativo, setAtivo] = useState(false);

  // ... (Toda a sua lógica useEffect e formatarTempo continua igual aqui) ...
 useEffect(() => {
     let intervalo;
     if (ativo && tempo > 0) {
     intervalo = setInterval(() => setTempo((t) => t - 1), 1000);
     } else if (tempo === 0) {
     clearInterval(intervalo);
     setRespiracaoCount((c) => c + 1);
     setAtivo(false);
     setTempo(60);
     }
     return () => clearInterval(intervalo);
   }, [ativo, tempo, setRespiracaoCount]);

     const formatarTempo = (t) => {
     const min = String(Math.floor(t / 60)).padStart(2, "0");
     const seg = String(t % 60).padStart(2, "0");
     return `${min}:${seg}`;
    };
  
   return (

    <div className="respiracao-fundo">
      
      <div className="respiracao-celular-box">
        
        <Cabecalho /> 
        
        <main className="respiracao-container">
          <MdSelfImprovement 
            className={`respiracao-icone ${ativo ? 'animacao-respirar' : ''}`} 
          />
          {!ativo ? (
            <>
              <h2 className="respiracao-titulo">Respire fundo</h2>
              <p className="respiracao-subtitulo">Tire um tempo para descansar</p>
              <button onClick={() => setAtivo(true)} className="btn-comecar">
                COMEÇAR
              </button>
            </>
          ) : 
          (
            <>
              <p className="respiracao-instrucao">Inspire... Expire...</p>
              <div className="cronometro">{formatarTempo(tempo)}</div>
            </>
          )}
        </main>

      </div>
    </div>
   );
}