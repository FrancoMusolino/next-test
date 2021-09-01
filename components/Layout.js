import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Scroll from './Scroll'
import Seo from './Seo'

const Layout = ({ children, title }) => {
    return (
        <>
            <Seo title={title} />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <Scroll />
        </>
    )
}

export default Layout;
