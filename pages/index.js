import React, { useState } from "react";
import App from "../components/App";
import Head from "next/head";
import ThemeChanger from "../components/ThemeChanger";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? "dark" : "";
  return (
    <>
      <Head>
        <title>Chat app</title>
      </Head>
      <div className={`fixed w-full h-full ${theme}`}>
        <ThemeChanger darkMode={darkMode} setDarkMode={setDarkMode} />
        <App />
      </div>
    </>
  );
};

export default Index;
