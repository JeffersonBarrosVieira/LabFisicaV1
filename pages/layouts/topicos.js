import React, {useState} from  'react';

import Cubo from './topicos/cubo';

const Topicos = () => {

    let topico = [Cubo()];

    const[InserirTopico, AlterarTopico] = useState("");

    return(
        <div>
            <div className="caixa-btn">
                <button className="btn-topicos" onClick={ () => AlterarTopico(topico[0])}>
                    Vamos começar!
                </button>
            </div>
            {InserirTopico}
        </div>
    )
}

export default Topicos