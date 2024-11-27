import React from "react";
import "./Register.css";
import Input from "../components/base/Inpust";
import Button from "../components/base/Button";

const Register = ({ switchToLogin }) => {
  return (

    <div className="register flex center">
        <div className="register-container flex column center">
            <h1>Build software, better.</h1>
            <ul className="flex column">
                <li>Compile code with simple and interactive UI</li>
                <li>Analyze code using AI</li>
                <li>Collaborate with others</li>
            </ul>
        </div>

        <div className="form-container">
            <h2>Register</h2>
            <form>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Register</Button>
            </form>
            <p>
                Already have an account?{" "}
                <Button onClick={switchToLogin}>Login</Button>
            </p>
        </div>
    </div>
  );
};

export default Register;
