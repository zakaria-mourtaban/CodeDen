import React, { useState } from "react";
import Navbar from "../components/base/Navbar";
import Sidebar from "../components/base/Sidebar";
import CodeEditor from "../components/base/CodeEditor";
import Preview from "../components/base/Preview";
import "./Workspace.css";

const Workspace = () => {
    const [code, setCode] = useState('');
    const [runCode, setRunCode] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chatResponse, setChatResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRunClick = () => {
        setRunCode(code);
    };

    const handleChatClick = async () => {
        setIsLoading(true);
        setIsModalOpen(true);

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: code }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setChatResponse(data.choices[0]?.message?.content || 'No response from the API.');
        } catch (error) {
            setChatResponse(`Error fetching response: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Function to format response text
    const formatResponse = (text) => {
		// Split the response into lines
		const lines = text.split("\n");
		return lines.map((line, index) => {
			// Check for bold markers (e.g., **text**)
			const boldRegex = /\*\*(.*?)\*\*/g;
			const formattedLine = line.replace(boldRegex, (_, boldText) => `<b>${boldText}</b>`);
	
			// Detect and render code blocks
			if (line.startsWith("```")) {
				return (
					<pre key={index} className="formatted-code">
						{line.replace(/```/g, "")}
					</pre>
				);
			}
	
			// Render formatted lines with bold text
			return (
				<p
					key={index}
					dangerouslySetInnerHTML={{ __html: formattedLine }}
				></p>
			);
		});
	};
	

    return (
        <div className="">
            <Navbar runclick={handleRunClick} chatclick={handleChatClick} />

            <div className="workspace-body flex">
                <Sidebar />
                <CodeEditor code={code} setCode={setCode} />
                <Preview code={runCode} />
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>
                            &times;
                        </button>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="formatted-response">
                                {formatResponse(chatResponse)}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Workspace;
