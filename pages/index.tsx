import React from "react"
import Header from "../components/header"
import Head from "next/head";
import { useEffect, useState } from "react";
import Banners from "../components/banners";

const Main = () => {
  return (
    <div className = "items-center justify-center bg-black">
      <Head>
        <link rel="icon" href="/popcorn.ico" />
        <title>Home</title>
      </Head>
      <div className=" top-100 left-0 right-0 object-contain">
        <Header />
      </div>
      <body>
        <Banners />
        <div className="flex h-screen overflow-x-scroll">
          <div className="flex items-center p-4"></div>
        </div>
      </body>
    </div>
  );
};

export default Main;
