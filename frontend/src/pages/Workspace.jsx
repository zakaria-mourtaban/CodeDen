import React from "react";
import Navbar from "../components/base/Navbar";
import Sidebar from "../components/base/Sidebar";
import CodeEditor from "../components/base/CodeEditor";
import Preview from "../components/base/Preview";


const Workspace = () =>{
    return(
        <div className="">
            <Navbar/>

            <div className="workspace-body flex">
                <Sidebar/>
                <CodeEditor/>
                <Preview/>
            </div>
        </div>
    )
}

export default Workspace;