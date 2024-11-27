import React from "react";
import "./Sidebar.css";
import Input from "./Input";
import Button from "./Button";

const Sidebar = () => (
    <div className="sidebar">

        <Button onClick={""} children={"Add A File"} />

        <Button onClick={""} children={"Add A Workspace"} />

        <Input placeholder={"Search"} name={"search"} type={"text"}/>    

        <h3>Workspaces</h3>

        <ul>
            <li>Workspace 1</li>
            <li>Workspace 2</li>
            <li>Workspace 3</li>
        </ul>
    </div>
  );
  
  export default Sidebar;
  