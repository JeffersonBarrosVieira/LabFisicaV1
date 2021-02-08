import React, {useState} from 'react';

import Sobre from './sobre';
import Objetivo from  './objetivo';
import Topicos from './topicos';


const Layout = () => {
    let conteudo = [<Sobre/>, <Objetivo/>, <Topicos/>];
    const[MostrarConteudo1, AlterarConteudo1] = useState("");
    const[MostrarConteudo2, AlterarConteudo2] = useState("");

    function inserirSobre(){
        AlterarConteudo1(conteudo[0]);
        AlterarConteudo2("");
    }

    function inserirObjetivo(){
        AlterarConteudo1(conteudo[1]);
        AlterarConteudo2("");
    }

    function mudarCondicao(){
        AlterarConteudo2(conteudo[2]);
    }
    
    return (
        <div id="navegacao">
            <header id="menu-geral">
                <div className="opcoes">

                    <button className="sobre" onClick={ () => inserirSobre()}>
                        Sobre
                    </button>
                    <button className="objetivo" onClick={ () => inserirObjetivo()}>
                        Objetivo
                    </button>
                    <a >
                    <button className="topicos" onClick={ () => mudarCondicao()}>
                        Tópicos
                    </button>
                    </a>
                    
                </div>

                <div className="opcoes-conteudo">
                    {MostrarConteudo1}
                </div>

                <a id="rodape" href="https://jeffersonbarros.vercel.app" target="_blank" >
                    Sobre Mim
                </a>

            </header>

            <main id="pagina-navegacao">

                <h1 className="titulo">Laboratório de Física Online</h1>
                
                <div id="conteudo-dinamico">
                    <div id="conteudo-fisica">
                        {MostrarConteudo2}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Layout