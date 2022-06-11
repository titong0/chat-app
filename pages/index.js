import React, { useState } from "react";
import App from "../components/App";
import Head from "next/head";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <title>Chat app</title>
      </Head>
      <div className={`fixed w-full h-full ${theme}`}>
        <button
          className="fixed top-3 right-3"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsMoonFill size="35" /> : <BsSunFill size="35" />}
        </button>

        <App />
      </div>
    </>
  );
};

export default Index;
