import React, { useState } from 'react';
import axios from 'axios';
import "./Invite.css";
import "../styles/base/utilities.css"
import Input from "../components/base/Input";
import Button from "../components/base/Button";



const InviteForm = () => {
    const [email, setEmail] = useState('');
    const [permission, setPermission] = useState('view');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:8000/api/collaborations',
                { email, permission },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response.data.message);
        } catch (error) {
            console.log('Error sending invitation');
        }
    };

    return (
        <div className="invite flex center">
            <div className="invite-container flex column center">
                <h1>Build software, better.</h1>
                <ul className="flex column">
                    <li>Compile code with simple and interactive UI</li>
                    <li>Analyze code using AI</li>
                    <li>Collaborate with others</li>
                </ul>
            </div>
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Permission:</label>
                        <select value={permission} onChange={(e) => setPermission(e.target.value)}>
                            <option value="view">View</option>
                            <option value="edit">Edit</option>
                        </select>
                    </div>
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </div>
    );
};

export default InviteForm;
