import Head from 'next/head';
import React from 'react';
import NavBar from './Navbar';

export default function Layout({children}) {
  return (
    <div className="items-center ">
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div>
        <NavBar/>
    </div>

    <main>
        {children}
    </main>
    </div>
  );
}
