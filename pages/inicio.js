import Head from 'next/head';
import Link from 'next/link';

function Inicio () {
    return (
        <div className="pagina-inicial">
            <Head>
                <title>LabFísica - Inicio</title>
            </Head>
            <header>
                <h1 className="nome animacao">LabFísica</h1>
            </header>
        </div>
    )
}

export default Inicio