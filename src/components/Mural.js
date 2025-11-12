import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Mural.css";
import Header from "./header";
import { FaRegUserCircle } from "react-icons/fa";

export default function Mural() {
 const { setMuralCount } = useContext(UserContext);
 const [mensagem, setMensagem] = useState("");
 const [lista, setLista] = useState([]);

 const enviar = () => {
  if (mensagem.trim() === "") return;
  const novaLista = [mensagem, ...lista]; 
  setLista(novaLista);
  setMensagem("");
  setMuralCount((c) => c + 1);
 };

 return (
  <div className="mural-fundo">
   <div className="mural-celular-box">
        
     <Header/>

    <main className="mural-conteudo">

    <h1 className="mural-titulo">Mural de Desabafos</h1>

    <div className="mural-input-container">

        <textarea
         placeholder="Escreva seu desabafo aqui..."
         value={mensagem}
         onChange={(e) => setMensagem(e.target.value)}
        />
          </div>

         <button onClick={enviar} className="btn-publicar">
            PUBLICAR ANONIMAMENTE
          </button>

         <article className="mural-lista">
           {lista.map((m, i) => (

         <div key={i} className="mural-post">
                <FaRegUserCircle className="mural-post-icone" />
                <div className="mural-post-texto">
                  <strong>Anônimo</strong>
                  <p>{m}</p>
                </div>
              </div>
           ))}
         </article>
       </main>
     </div>
     </div>
   );
}