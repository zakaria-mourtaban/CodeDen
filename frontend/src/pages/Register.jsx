import React from "react";
import "./Register.css";
import Input from "../components/base/Inpust";
import Button from "../components/base/Button";

const Register = ({ switchToLogin }) => {
  return (
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
  );
};

export default Register;
