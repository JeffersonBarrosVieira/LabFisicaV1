import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


function Home () {
    return (
        <div className="pagina-inicial">
            <Head>
                <title>LabFísica</title>
            </Head>

            <main>
                <div className="title">
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

                <code className="code">Versão 1.2</code>

                <p className="descricao">
                    <Link href="/inicio">
                        <a className="comecar">
                            ENTRAR
                        </a>
                    </Link>
                </p>
            </main>
            
            <footer>

            </footer>
        </div>
    )
}

export default Home