import React, {useEffect} from  'react';

const Cubo = () => {
    function inserirCubo () {
        useEffect( function mount() {
            window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }

            async function __main__() { // async wrapper permits use of await outside your own functions
            
            var vector = vec // optional: makes vector a synonym of the fundamental vec
            let scene = canvas({title: '<h1>Cubo</h1>',width:500, height:800, autoscale:0, range:2,
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
        <div id="glowscript" style={{width: "60vw"}} className="glowscript">
            <script type="text/javascript">
                {inserirCubo()}
            </script>
        </div>
    )
}

export default Cubo