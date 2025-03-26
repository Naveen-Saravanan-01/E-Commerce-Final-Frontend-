import React, { useState } from 'react';
import axios from 'axios';
import './css/NewPass.css'

const NewPass = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {

        const email = localStorage.getItem("resetEmail")
        if (!newPassword || !confirmPassword) {
            alert("Please enter both fields.");
            return;
        }
    
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        try {
            const res = await axios.put('https://e-commerce-final-backend-production.up.railway.app/setNew', {
                email,
                password: newPassword,
            });
    
            setMessage(res.data.message);
            
            localStorage.removeItem("resetEmail");
    
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000); 
    
        } catch (error) {
            console.error("Error:", error);
            setMessage("Something went wrong.");
        }
    };
    

    return (
        <div style={{ marginTop: "120px" }}>
            <div className="newpass-div">
                <div className="input-new">
                    <input
                        type="password"
                        name="new"
                        required
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                    <input
                        type="password"
                        name="re"
                        required
                        placeholder="Re-Enter New Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <button onClick={handleSubmit}>Set Password</button>

                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default NewPass;
