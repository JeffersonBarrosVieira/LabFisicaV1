import React, {useState} from  'react';

import Cubo from './topicos/cubo';

const Topicos = () => {

    let topico = [Cubo()];

    const[InserirTopico, AlterarTopico] = useState("");

    return(
        <div>
            <button onClick={ () => AlterarTopico(topico[0])}>
                Cubo
            </button>
            {InserirTopico}
        </div>
    )
}

export default Topicos