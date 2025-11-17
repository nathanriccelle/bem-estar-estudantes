import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Login.css";
import Header from "./header";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const { setUsername } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const location = useLocation().pathname;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nome.trim()) return alert("Digite seu nome!");
    setUsername(nome);
    navigate("/home");
  };

  return (
    <main className="container login-container">
      <section className="box login-box">
        {(location !== "/") && (
          <Header/>
        )}
        <div className="conteudo">
        <h1 className="app-title">Bem estar Estudante</h1>
        <form onSubmit={handleLogin}>
          {/* <input
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
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

           */}

          <TextField 
            label="Nome" variant="outlined" autoComplete="off" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
          <TextField 
            label="Email" variant="outlined" autoComplete="off" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <TextField 
            label="Senha" variant="outlined" autoComplete="off" 
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
          <Button variant="contained" type="submit" size="large">ENTRAR</Button>
        </form>
        <p className="footer-text">Cuide do seu corpo e mente 💚</p>
        </div>
      </section>
    </main>
  );
}
