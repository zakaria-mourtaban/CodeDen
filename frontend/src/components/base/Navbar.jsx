import React from "react";
import "./Navbar.css";
import Button from "./Button";


const Navbar = () => (
    <nav className="navbar">
      <h1>CodeDen</h1>
      <Button className="workspace-button" children="Run" />
      <div className="flex workspace-buttons">
        <Button className="workspace-button" children="Analyze" />
        <Button className="workspace-button" children="Invite" />
        <Button className="workspace-profile" children="AI" />
      </div>
    </nav>
  );
  
export default Navbar;