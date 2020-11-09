import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Signup = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird | 회원가입</title>
      </Head>
      <div>회원가입</div>
    </AppLayout>
  );
};

export default Signup;