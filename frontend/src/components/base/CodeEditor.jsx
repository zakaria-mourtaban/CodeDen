import { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./CodeEditor.css";
import Echo from "laravel-echo";
import pusher from "pusher-js";

window.Pusher = pusher;
const CodeEditor = ({ code, setCode }) => {
	// const echo = new Echo({
	// 	broadcaster: "reverb",
	// 	key: "qs7zsgqt1db6znsbfxht", // Replace with your actual Reverb key
	// 	wsHost: "localhost", // Replace with your WebSocket server host
	// 	wsPort: "8080", // Replace with your WebSocket server port
	// 	forceTLS: false,
	// 	encrypted: false,
	// 	enabledTransports: ["ws", "wss"],
	// 	disableStats: true,
	// 	authEndpoint: "http://localhost:8000/broadcasting/auth",
	// });
	// const channel = echo.private("room");
	
	useEffect(() => {
		// channel.listenForWhisper("typing", (event) => {
		// 	console.log("something: ", event);
		// });
	}, []);
	return (
		<div className="editor">
			<MonacoEditor
				height="100vh"
				defaultLanguage="javascript"
				value={code}
				onChange={(e) => {
					setCode(e);
					// channel.whisper("typing", { data: e });
				}}
			/>
		</div>
	);
};

export default CodeEditor;
