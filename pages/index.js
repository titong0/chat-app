import React from "react";
import App from "../components/App";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Chat app</title>
      </Head>
      <div className="fixed w-full h-full ">
        <App />
      </div>
    </>
  );
};

export default Index;
