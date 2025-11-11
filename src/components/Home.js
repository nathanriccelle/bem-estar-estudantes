import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Home.css";
import Header from "./header";

export default function Home() {
  const { username } = useContext(UserContext);

  return (
    <main className="home-container">
      <section className="home-box">
        <Header/>
        <div className="conteudo">
        <h1>Olá, {username || "visitante"} 👋</h1>
        <p>Como está se sentindo hoje?</p>

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
