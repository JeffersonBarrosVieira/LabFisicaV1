import React, {useEffect} from 'react';

const Vpython = () => {
    function teste () {
        useEffect( function mount() {
            window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }

            async function __main__() { // async wrapper permits use of await outside your own functions

            var vector = vec // optional: makes vector a synonym of the fundamental vec
            let scene = canvas()
            let b = box({color:color.cyan})
            
            async function f(obj) { // needs async because f() contains an await
                let t = clock()
                
                while (true) {
                    await rate(100)
                    obj.rotate({angle:0.01, axis:vec(0,1,0)})
                    if (clock()-t > 3) break
                }
                return 25
            }
        
            let x = await f(b) // needs await (inside async __main__) because f() contains an await
            print(x)
            } // end of __main__ wrapper
            __main__()

        });
        
    }

    return(
        <>
        <div id="glowscript" className="glowscript">
            <script type="text/javascript">
             {teste()}
            </script>
        </div>
        </>
    )
}

export default Vpython