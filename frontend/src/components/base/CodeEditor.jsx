import { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./CodeEditor.css";
import Echo from "laravel-echo";
import pusher from "pusher-js";
import { useEcho } from "../../context/echo";

window.Pusher = pusher;
const CodeEditor = ({ code, setCode }) => {
	const echo = useEcho(); // Get Echo instance from context
	const [channel, setChannel] = useState(null);
  
	useEffect(() => {
	  if (echo) {
		const newChannel = echo.private("room");
  
		newChannel.listenForWhisper("typing", (event) => {
		  console.log("Something:", event);
		});
	  }
	}, [echo]);
  
	const handleEditorChange = (value) => {
	  setCode(value);
	};
  
	const handleTyping = (e) => {
	  if (channel) {
		channel.whisper("typing", { data: e });
	  }
	  console.log(e);
	};
  
	return (
	  <div className="editor">
		<MonacoEditor
		  height="100vh"
		  defaultLanguage="javascript"
		  value={code}
		  onChange={(e) => {
			handleEditorChange(e);
			handleTyping(e);
		  }}
		/>
	  </div>
	);
  };
  
  export default CodeEditor;