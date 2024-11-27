import { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Make sure to add Pusher to the window object
window.Pusher = Pusher;

const useEcho = (channel, eventName, setMessage) => {
  useEffect(() => {
    // Initialize Echo
    const echo = new Echo({
      broadcaster: 'reverb',
      key: 'qs7zsgqt1db6znsbfxht', // Replace with your actual Reverb key
      wsHost: '0.0.0.0',           // Replace with your WebSocket server host
      wsPort: 8080,                // Replace with your WebSocket server port
      forceTLS: false,
      encrypted: false,
      disableStats: true,
    });

    // Listen to the channel and event
    const listener = echo.channel(channel).listen(eventName, (event) => {
      console.log('Received event:', event);
      setMessage(event.message);
    });
  }, [channel, eventName]);
};

export default useEcho;
