import React, {useEffect} from  'react';

const Cubo = () => {
    function inserirCubo () {
        useEffect( function mount() {
            window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }

            async function __main__() { // async wrapper permits use of await outside your own functions
            
            var vector = vec // optional: makes vector a synonym of the fundamental vec
            let scene = canvas({width:500, height:800, autoscale:0, range:2,
            center:vec(0,0,0), forward:vec(-0.3,0,-5), background:vec(0.2,0.2,0.2)})
            let b = box({color:color.cyan})
            
            async function f(obj) { // needs async because f() contains an await
                let t = 0
                let dt = 0.01
                

                while (true) {
                    await rate(100)

                    t += dt
                    // console.log(t)
                    obj.rotate({angle:0.01, axis:vec(0,1,0)})
                    if (t > 3) break
                    
                }
                return 0
            }
            
            
            print(x)
            let x = await f(b) // needs await (inside async __main__) because f() contains an await
            
            } // end of __main__ wrapper
            __main__()

        });
        
    }

    return(
        <>
        <h1 className="titulo-topicos">Tutorial</h1>
        <div id="glowscript" style={{width: "60vw"}} className="glowscript">
            <script type="text/javascript">
                {inserirCubo()}
            </script> 
        </div>
        <p id="conteudo-problema">
            Olá seja bem vindo ao Laboratório de Física Online!
            <br/>
            Como pode ver, uma animação foi exibida acima desta caixa de mensagem. Essa animação
            tem uma interação direta com o usuario! Para visualizar isso, basta
            manipular o objeto dentro do ambiente animado (região cinza): é possível rotacionar o objeto
            e dar zoom!!! :0 Muito legal né?! ^^ Então... vamos lá?
            <br/><br/>
            Caso esteja utilizando celular:<br/>
            -Use um dedo: arrastando ele sobre a região cinza para rotacionar o objeto;<br/> 
            -Utilize os dois dedos para dar Zoom: aproximando ambos os dedos ou afastando
            eles entre si sobre a região cinza.
            <br/><br/>
            Caso esteja no computador:<br/>
            -Segure o botão esquerdo na região cinza, e arraste sobre a região cinza para
            rotacionar o objeto ou segure a tecla Crtl e pressione o botão esquerdo do mouse
            arrastando sobre a região cinza;<br/>
            -Segure o botão direito sobre a região cinza e arraste para cima aumentando o Zoom
            ou para baixo diminuindo o Zoom ou rotacione sobre a região cinza o botão Scroll do
            mouse (uma bolinha que gira).<br/><br/>


        </p>
        </>
    )
}

export default Cubo