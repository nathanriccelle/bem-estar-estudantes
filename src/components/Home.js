import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { MdSelfImprovement } from 'react-icons/md';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';
import "./Home.css";
import Header from "./header";

export default function Home() {
  const { username } = useContext(UserContext);

  return (
    <main className="home-container">
      <section className="home-box">
        <Header/>
        <div className="conteudo">
        <h1>Olá, {username || "visitante"}</h1>
        <div className="saudacao-conteudo">
        
        <div className="saudacao-ilustracao">
          <MdSelfImprovement />
        </div>

        <div className="saudacao-pergunta">
          <p>Como você está se sentindo hoje?</p>
          
          <div className="saudacao-icones-humor">
            <button className="saudacao-botao-humor"><FaRegSmile /></button>
            <button className="saudacao-botao-humor"><FaRegMeh /></button>
            <button className="saudacao-botao-humor"><FaRegFrown /></button>
          </div>
        </div>

      </div>

        <nav className="menu">
          <Link to="/respiracao" className="menu-item">🧘 Respiração</Link>
          <Link to="/mural" className="menu-item">💬 Mural</Link>
          <Link to="/conquistas" className="menu-item">🏅 Conquistas</Link>
        </nav>
        </div>
      </section>
    </main>
  );
}
