import React, {useEffect} from 'react';

const Colisao = () => {
    function inserirColisao () {
        useEffect( function mount() {
            window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }

            async function __main__() { // async wrapper permits use of await outside your own functions

            var vector = vec // optional: makes vector a synonym of the fundamental vec
            
            let scene = canvas({title: '<h1>Colisão heheh</h1>',width:400, height:300, autoscale:0, range:10,
            center:vec(0,0,0), forward:vec(-1,-1,-1), background:vec(0,0,0)})
            
            let chao= box({pos:vec(0,0,0), size:vec(25,0.2,5), texture:textures.wood})

            let r1 = 0.5
            let bola1 = sphere({pos:vec(chao.size.x/2 -r1,chao.size.y/2 +r1,0), radius:r1, color:color.green})
            let bola2 = sphere({pos:vec(-chao.size.x/2 +r1,chao.size.y/2 +r1,0), radius:r1, color:color.blue})
            
            
            let b1posx0 = bola1.pos.x
            let b2posx0 = bola2.pos.x

            async function f() { // needs async because f() contains an await
                let val = 1
                
                let t = 0
                let t0 = 0
                let dt = 0.01

                let va = 0
                let v01 = -10
                let v02 = 10
                
                let v1 = v01
                let v2 = v02

                let m1 = 10
                let m2 = 10
                
                while (true) {
                    await rate(100)
                    
                    t  += dt
                    if((bola1.pos.x < chao.size.x/2) && (bola1.pos.x > -1*chao.size.x/2)){
                        bola1.pos.x = b1posx0 +v1*(t - t0)
                    }
                    if((bola2.pos.x < chao.size.x/2) && (bola2.pos.x > -1*chao.size.x/2)){
                        bola2.pos.x = b2posx0 +v2*(t - t0)
                    }

                    if((bola1.pos.x <= bola2.pos.x + 2*r1) && (val == 1)){
                        t0 = t
                        b1posx0 = bola1.pos.x
                        b2posx0 = bola2.pos.x

                        va = -(m1*v01 + m2*v02 - m2*v2)/m1
                        v2 = -(m1*v01 + m2*v02 - m1*v1)/m2
                        v1 = va

                        val = 2
                    }

                    if (t > 3) break
                }
                return 0
            }
            let x = await f() // needs await (inside async __main__) because f() contains an await
            print(x)
            } // end of __main__ wrapper
            __main__()

        });
        
    }

    return(
        <>
        <div id="glowscript" className="glowscript">
            <script type="text/javascript">
             {inserirColisao()}
            </script>
        </div>
        </>
    )
}

export default Colisao