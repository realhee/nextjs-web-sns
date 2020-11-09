import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird | 프로필</title>
      </Head>
      <div>내 프로필</div>
    </AppLayout>
  );
};

export default Profile;