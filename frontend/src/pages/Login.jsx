import React from "react";
import "./Login.css";
import "../styles/base/utilities.css"
import Input from "../components/base/Input";
import Button from "../components/base/Button";

const Login = ({ switchToRegister }) => {
  return (

    <div className="login flex center">
        <div className="login-container flex column center">
            <h1>Build software, better.</h1>
            <ul className="flex column">
                <li>Compile code with simple and interactive UI</li>
                <li>Analyze code using AI</li>
                <li>Collaborate with others</li>
            </ul>
        </div>

        <div className="form-container">
            <h2>Login</h2>
            <form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </form>
            <p>
                Don't have an account?{" "}
                <Button onClick={switchToRegister}>Register</Button>
            </p>
        </div>
    </div>
  );
};

export default Login;
