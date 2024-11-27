import React, { createContext, useContext, useState, useEffect } from "react";
import Echo from "laravel-echo";
import pusher from "pusher-js";

window.Pusher = pusher;
// Create the Echo Context
const EchoContext = createContext();

// Custom Hook to use Echo context
export const useEcho = () => {
  return useContext(EchoContext);
};

// Echo Provider Component
export const EchoProvider = ({ children }) => {
  const [echo, setEcho] = useState(null);

  useEffect(() => {
    const echoInstance = new Echo({
      broadcaster: "reverb",
      key: "qs7zsgqt1db6znsbfxht", // Replace with your actual Reverb key
      wsHost: "localhost", // Replace with your WebSocket server host
      wsPort: "8080", // Replace with your WebSocket server port
      forceTLS: false,
      encrypted: false,
      enabledTransports: ["ws", "wss"],
      disableStats: true,
    });

    setEcho(echoInstance);

    // Cleanup Echo instance on unmount
    return () => {
      if (echoInstance) echoInstance.disconnect();
    };
  }, []);

  return (
    <EchoContext.Provider value={echo}>
      {children}
    </EchoContext.Provider>
  );
};
