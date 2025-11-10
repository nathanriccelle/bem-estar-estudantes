import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Conquistas.css";

export default function Conquistas() {
  const { username, respiracaoCount, muralCount } = useContext(UserContext);

  const conquistas = [];
  if (respiracaoCount > 0) conquistas.push("Sessão de Respiração Concluída");
  if (muralCount > 0) conquistas.push("Primeiro Desabafo no Mural");

  return (
    <main className="conquistas-container">
      <section className="conquistas-box">
        <h2>Minhas Conquistas</h2>
        {username && <p className="boas-vindas">Parabéns, {username}! 🌟</p>}
        <p>{conquistas.length} conquistas alcançadas</p>
        <div className="badges">
          {conquistas.map((c, i) => (
            <div key={i} className="badge">{c}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
