import React, {useState} from  'react';

import Dinamica from './topicos/dinamica';
import Gravitacao from './topicos/gravitacao';
import Oscilacao from './topicos/oscilacao';



const Topicos = () => {

    let topico = [Dinamica(), Gravitacao(), Oscilacao()];
    // const[MostrarTopico, AlterarTopico] = useState("");

    function canvasDinamica(){
        var cnv = document.getElementById("dinamica");
        var ctx = cnv.getContext("2d");
        if(cnv.getContext){
            var ctx = cnv.getContext("2d");
            
            alert(ctx);
            console.log(ctx);
        }
    }

    function canvasGravitacao(){
        var cnv = document.getElementById("gravitacao");
        var ctx = cnv.getContext("2d");
        if(cnv.getContext){
            var ctx = cnv.getContext("2d");
            
            alert("teste");
            console.log(ctx);
        }
    }

    function canvasOscilacao(){
        var cnv = document.getElementById("oscilacao");
        var ctx = cnv.getContext("2d");
        if(cnv.getContext){
            var ctx = cnv.getContext("2d");
            
            alert(ctx);
            console.log(ctx);
        }
    }

    function inserirTopico(conteudo){
        var div = document.getElementById("conteudo-fisica");
        div.innerHTML = conteudo;

        if(conteudo == topico[0]){
            canvasDinamica();
        }
        if(conteudo == topico[1]){
            canvasGravitacao();
        }
        if(conteudo == topico[2]){
            canvasOscilacao();
        }
       
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