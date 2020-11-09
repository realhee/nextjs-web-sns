import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird | 인덱스</title>
      </Head>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;