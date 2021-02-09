import React from  'react';

const Objetivo = () => {
    return(
        <div>
            <div id="sobre-problema">
                <h1 className="titulo">Geral</h1>
                <p className="descricao">
                Despertar a imaginação criativa de situações físicas, permitindo 
                a análise de problemas físicos por meio de Modelagens Matemáticas,
                Leis Físicas e Métodos Computacionais.
                </p>
            </div>
            <div id="sobre-projeto">
                <h1 className="titulo">Específicos</h1>
                <p className="descricao">
                1- Mostrar o comportamento de problemas físicos aproximados a realidade;<br/><br/>
                2- Disponibilizar a função utilizada para descrever o comportamento;<br/><br/>
                3- Abordar as Leis Físicas utilizadas no comportamento;<br/><br/>
                4- Revelar a modelagem matemática necessária para chegar na função com base nas Leis Físicas;<br/><br/>
                5- Possibilitar a análise do comportamento do problema variando os parametros da função.
                </p>

            </div>
        </div>
    )
}

export default Objetivo