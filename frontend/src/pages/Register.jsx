import React, {useState} from "react";
import "./Register.css";
import Input from "../components/base/Input";
import Button from "../components/base/Button";

const Register = ({ switchToLogin }) => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const [message, setMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to register");
          }
    
          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          console.log(data);
          setMessage(`Registration successful! You can now log in.`);

        } catch (error) {
          console.error("Error:", error);
          setMessage("Registration failed. Please try again.");
        }
      };

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
            <form onSubmit={handleSubmit}>
                <Input 
                type="text" 
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
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
                <Button type="submit">Register</Button>
            </form>

            {message && <p className={message.includes("successful") ? "success" : "error"}>{message}</p>}


            <p>
                Already have an account?{" "}
                <Button onClick={switchToLogin}>Login</Button>
            </p>
        </div>
    </div>
  );
};

export default Register;
