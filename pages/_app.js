import "../index.css";
import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const Io = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [ioClient, setIoClient] = useState(null);

  useEffect(() => {
    const location = window.location.href.replace("3000", "4000");
    const connection = io(location, {
      transports: ["websocket"],
    });
    connection.on("connect", () => setIoClient(connection));
    connection.on("connect_error", () => setIoClient(connection));

    return () => {
      connection.close();
    };
  }, []);

  return (
    <Io.Provider value={ioClient}>
      <Component {...pageProps} />
    </Io.Provider>
  );
};

export default MyApp;
