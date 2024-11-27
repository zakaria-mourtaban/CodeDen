import React, {useState} from "react";
import Navbar from "../components/base/Navbar";
import Sidebar from "../components/base/Sidebar";
import CodeEditor from "../components/base/CodeEditor";
import Preview from "../components/base/Preview";
import "./Workspace.css";

const Workspace = () =>{
    const [code, setCode] = useState('');
    const [runCode, setRunCode] = useState('');

    const handleRunClick = () => {
        setRunCode(code);
    };

    return(
        <div className="">
            <Navbar onClick={handleRunClick}/>

            <div className="workspace-body flex">
                <Sidebar/>
                <CodeEditor code={code} setCode={setCode} />
                <Preview code={runCode} />
            </div>
        </div>
    )
}

export default Workspace;