import React, {useState} from "react";
import Navbar from "../components/base/Navbar";
import Sidebar from "../components/base/Sidebar";
import CodeEditor from "../components/base/CodeEditor";
import Preview from "../components/base/Preview";
import "./Workspace.css";

const Workspace = () =>{
    const [code, setCode] = useState('');

    return(
        <div className="">
            <Navbar/>

            <div className="workspace-body flex">
                <Sidebar/>
                <CodeEditor code={code} setCode={setCode} />
                <Preview code={code} />
            </div>
        </div>
    )
}

export default Workspace;