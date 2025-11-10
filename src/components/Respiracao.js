import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Respiracao.css";

export default function Respiracao() {
  const { username, setRespiracaoCount } = useContext(UserContext);
  const [tempo, setTempo] = useState(60);
  const [ativo, setAtivo] = useState(false);

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
    <main className="respiracao-container">
      <section className="respiracao-box">
        <h2>Respiração Guiada</h2>
        {username && <p className="boas-vindas">Olá, {username}! 🌿</p>}
        <p>Relaxe e acompanhe o cronômetro abaixo:</p>
        <div className="cronometro">{formatarTempo(tempo)}</div>
        <button onClick={() => setAtivo(true)} disabled={ativo} className="btn-iniciar">
          {ativo ? "Respirando..." : "Iniciar Sessão"}
        </button>
      </section>
    </main>
  );
}
