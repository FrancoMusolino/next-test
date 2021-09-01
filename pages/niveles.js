import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link';

const Niveles = () => {
    return (
        <Layout title="Las Nieves | Niveles">
            <h2>Niveles</h2>
            <ul>
                <li>
                    <Link href="/niveles/inicial"><a>Inicial</a></Link>
                </li>
                <li>
                    <Link href="/niveles/primario"><a>Primario</a></Link>
                </li>
                <li>
                    <Link href="/niveles/secundario"><a>Secundario</a></Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Niveles;
