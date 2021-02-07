import React, {useState} from 'react';

import Sobre from './sobre';
import Objetivo from  './objetivo';
import Topicos from './topicos';


const Layout = () => {
    let conteudo = [<Sobre/>, <Objetivo/>, <Topicos/>];
    const[MostrarConteudo1, AlterarConteudo1] = useState("");

    return (
        <div id="navegacao">
            <header id="menu-geral">
                <div className="opcoes">

                    <button className="sobre" onClick={ () => AlterarConteudo1(conteudo[0])}>
                        Sobre
                    </button>
                    <button className="objetivo" onClick={ () => AlterarConteudo1(conteudo[1])}>
                        Objetivo
                    </button>
                    <button className="topicos" onClick={ () => AlterarConteudo1(conteudo[2])}>
                        Tópicos
                    </button>
                    
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
                
                <div className="conteudo-dinamico">
                    Conteudo:
                    <div id="conteudo-fisica">

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Layout