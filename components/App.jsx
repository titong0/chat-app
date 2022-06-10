import Chat from "./Chat";
import React, { useState, useContext } from "react";
import Login from "./Login";
import { Io } from "../pages/_app";
import { Socket } from "socket.io-client";

const App = () => {
  const [username, setUsername] = useState(null);
  /**
   * @type {Socket}
   */
  const socket = useContext(Io);

  return username === null ? (
    <Login username={username} setUsername={setUsername} />
  ) : (
    <>
      {!socket.connected ? (
        <div>Connecting</div>
      ) : (
        <div className="h-full ">
          <Chat username={username} />
        </div>
      )}
    </>
  );
};

export default App;
