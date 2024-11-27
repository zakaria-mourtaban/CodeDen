import React, { useState } from "react";
import "./Login.css";
import "../styles/base/utilities.css"
import Input from "../components/base/Input";
import Button from "../components/base/Button";

const Login = ({ switchToRegister }) => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Failed to login");
        }
  
        const data = await response.json();
  
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
  
        setMessage(`Welcome back, ${data.user.name}!`);
      } catch (error) {
        console.error("Error:", error);
        setMessage("Login failed. Please check your credentials and try again.");
      }
    };


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
            <form  onSubmit={handleSubmit}>
                <Input 
                type="email" 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <Input 
                type="password" 
                placeholder="Password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <Button type="submit">Login</Button>
            </form>

            {message && <p className={message.includes("Welcome") ? "success" : "error"}>{message}</p>}

            <p>
                Don't have an account?{" "}
                <Button onClick={switchToRegister}>Register</Button>
            </p>
        </div>
    </div>
  );
};

export default Login;
