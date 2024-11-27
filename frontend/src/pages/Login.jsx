import React from "react";
import "./Login.css";
import Input from "../components/base/Inpust";
import Button from "../components/base/Button";

const Login = ({ switchToRegister }) => {
  return (
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
  );
};

export default Login;
