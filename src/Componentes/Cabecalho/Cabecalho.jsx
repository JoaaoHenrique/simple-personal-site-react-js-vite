import React from "react";

import "./Cabecalho.css";

function Cabecalho(props) {

    const { nome, cargo, foto } = props.informacoes;

    return (
        <header>
            <img src={foto} alt="Foto de João Henrique" srcSet="" />
            <h1 id="nome-perfil">{nome}</h1>
            <h3 id="eventoSubtitulo">{cargo}</h3>
        </header>
    )
}

export default Cabecalho