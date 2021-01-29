import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    return (
        <main id="pagina-inicial">
            <div className="titulo-central">
                <h1 className="lab">
                    LAB
                </h1>
                <h2 className="forma">
                    de
                </h2> 
                <h1 className="fisica">
                    FÍSICA
                </h1>
                <h2 className="forma">
                    online
                </h2>
            </div>

            <img className="mola" src="/img/mola.png"/>
            <img className="ima" src="/img/ima.png"/>
            <code className="versao">Versão 1.3</code>

           
            <Link href="/navegacao">
                <a className="entrar">
                    ENTRAR
                </a>
            </Link>
            
        </main>
    )
}

export default Home