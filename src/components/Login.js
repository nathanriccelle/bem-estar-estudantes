import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Login.css";

export default function Login() {
  const { setUsername } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nome.trim()) return alert("Digite seu nome!");
    setUsername(nome);
    navigate("/home");
  };

  return (
    <main className="login-container">
      <section className="login-box">
        <h1 className="app-title">Bem-Estar-Estudantes</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="footer-text">Cuide do seu corpo e mente 💚</p>
      </section>
    </main>
  );
}
