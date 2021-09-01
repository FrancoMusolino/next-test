import React from 'react'
import Head from 'next/head'

const Seo = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="utf-8" />
            <link rel="icon" type="image/png" href={`/img/lasnieves.png`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#111111" />
            <meta name="description" content="Test Las Nieves PWA" />
            <link rel="apple-touch-icon" href="./images/logo.png" />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
            />
            <link rel="manifest" href={`/manifest.json`} />
        </Head>
    )
}

export default Seo
