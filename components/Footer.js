import React from 'react'

const Footer = () => {
    let styles = {
        padding: "2rem",
        width: "80%",
        margin: "30px auto",
        backgroundColor: "#dddddd",
    };

    return (
        <div style={styles}>
            <h3 style={{ textAlign: "center" }}>Este es un Footer en NEXT!</h3>
            <p>Derechos de autor reservados</p>
        </div>
    )
}

export default Footer;
