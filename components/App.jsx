import Chat from "./Chat";
import React, { useState, useContext } from "react";
import Login from "./Login";
import { Io } from "../pages/_app";

const App = () => {
  const [username, setUsername] = useState(null);

  const socket = useContext(Io);

  return username === null ? (
    <Login username={username} setUsername={setUsername} />
  ) : (
    <>
      {!socket.connected ? (
        <div className="flex itmes-center justify-center text-white text-4xl">
          Connecting
        </div>
      ) : (
        <div className="h-full">
          <Chat username={username} />
        </div>
      )}
    </>
  );
};

export default App;
