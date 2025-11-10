import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Mural.css";

export default function Mural() {
  const { username, setMuralCount } = useContext(UserContext);
  const [mensagem, setMensagem] = useState("");
  const [lista, setLista] = useState([]);

  const enviar = () => {
    if (mensagem.trim() === "") return;
    const novaLista = [...lista, mensagem];
    setLista(novaLista);
    setMensagem("");
    setMuralCount((c) => c + 1);
  };

  return (
    <main className="mural-container">
      <section className="mural-box">
        <h2>Mural de Desabafos</h2>
        {username && <p className="boas-vindas">Olá, {username}! ✨</p>}
        <textarea
          placeholder="Escreva algo..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button onClick={enviar}>Publicar</button>
        <article className="mural-mensagens">
          {lista.map((m, i) => (
            <div key={i} className="mensagem">{m}</div>
          ))}
        </article>
      </section>
    </main>
  );
}
