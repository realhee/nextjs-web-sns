
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>NodeBird</title>
            </Head>
            <Component></Component>
        </>
    );
};

export default NodeBird;