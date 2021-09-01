import React from 'react'
import Link from 'next/link'

const Header = () => {
    let styles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return (
        <>
            <header style={{ padding: "1rem", backgroundColor: "#4e4" }}>
                <nav style={styles}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/niveles"><a>Niveles</a></Link>
                    <Link href="/autoridades"><a>Autoridades</a></Link>
                    <Link href="/nosotros"><a>Nosotros</a></Link>
                </nav>
            </header>
        </>
    )
}

export default Header;
