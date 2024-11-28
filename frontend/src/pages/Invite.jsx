import React, { useState } from 'react';
import axios from 'axios';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Permission:</label>
                <select value={permission} onChange={(e) => setPermission(e.target.value)}>
                    <option value="view">View</option>
                    <option value="edit">Edit</option>
                </select>
            </div>
            <button type="submit">Send Invitation</button>
        </form>
    );
};

export default InviteForm;
