import React from 'react'
import Layout from '../components/Layout';
import User from '../components/User';

const Autoridades = ({ users }) => {
    return (
        <Layout title="Las Nieves | Autoridades">
            <h2>Autoridades</h2>
            <User users={users} />
        </Layout>
    )
}

Autoridades.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users");
    const resJson = await res.json();

    return {
        users: resJson.data,
    }
}

export default Autoridades;
