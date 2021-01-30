import React, {useState} from  'react';

import Dinamica from './topicos/dinamica';
import Gravitacao from './topicos/gravitacao';
import Oscilacao from './topicos/oscilacao';



const Topicos = () => {

    let topico = [Dinamica(), Gravitacao(), Oscilacao()];
    // const[MostrarTopico, AlterarTopico] = useState("");


    function inserirTopico(conteudo){
        var div = document.getElementById("conteudo-fisica");
        div.innerHTML = conteudo;
    }

    return(
        <div>
            <button onClick={ () => inserirTopico(topico[0])}>
                Dinâmica
            </button>
            <button onClick={ () => inserirTopico(topico[1])}>
                Gravitação
            </button>
            <button onClick={ () => inserirTopico(topico[2])}>
                Oscilação
            </button>
        </div>
    )
}

export default Topicos