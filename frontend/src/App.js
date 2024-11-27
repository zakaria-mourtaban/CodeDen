import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import "./App.css";

window.Pusher = Pusher;
function App() {
	const [message, setMessage] = useState(null);

	// Use the custom hook to listen for events on the 'room' channel and 'UpdateCode' event
	const echo = new Echo({
		broadcaster: "reverb",
		key: "qs7zsgqt1db6znsbfxht", // Replace with your actual Reverb key
		wsHost: "127.0.0.1", // Replace with your WebSocket server host
		wsPort: "8080", // Replace with your WebSocket server port
		forceTLS: false,
		encrypted: false,
		enabledTransports: ['ws'],
		disableStats: true,
	});
	useEffect(() => {
		echo.channel("chat");

	}, []);

	return (
		<div className="App">
			<header className="App-header">
			</header>
		</div>
	);
}

export default App;
