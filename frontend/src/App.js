import React, { useState } from 'react';
import useEcho from './echo';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  // Use the custom hook to listen for events on the 'room' channel and 'UpdateCode' event
  const receivedMessage = useEcho('room', 'UpdateCode');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          WebSocket Connection Status: {receivedMessage ? 'Connected' : 'Disconnected'}
        </p>
        <p>
          {receivedMessage ? `Received message: ${receivedMessage}` : 'Waiting for message...'}
        </p>
      </header>
    </div>
  );
}

export default App;
