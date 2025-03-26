import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './css/ForgotPage.css'

const ForgotPage = () => {
    const [mail, setMail] = useState("");
    const [otpp, setOtpp] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleMail = (e) => {
        setMail(e.target.value);
    };

    const handleOtp = (e) => {
        setOtpp(e.target.value);
    };

    const submitMail = async () => {
        if (!mail || !/\S+@\S+\.\S+/.test(mail)) {
            alert("Please enter a valid email address");
            return;
        }

        try {
            const res = await axios.post('https://e-commerce-final-backend-production.up.railway.app/resetOtp', { email: mail });
            console.log(res.data);
            alert("otp sent successfully!!")

            setMessage("OTP sent to your email.");
        } catch (err) {
            console.error("Error sending OTP:", err.response?.data || err.message);
            setMessage("Failed to send OTP. Try again.");
        }
    };

    const verifyOtp = async () => {
        if (!otpp) {
            alert("Please enter the OTP");
            return;
        }

        try {
            const res = await axios.post('https://e-commerce-final-backend-production.up.railway.app/verifyOtp', { email: mail, otp: otpp });
            console.log(res.data);
            setMessage(res.data.message);

            localStorage.setItem("resetEmail", mail);  

            if(res.data.success){
                navigate('/new-password')
            }


        } catch (err) {
            console.error("Error verifying OTP:", err.response?.data || err.message);
            setMessage("Invalid OTP. Try again.");
        }
    };

    return (
        <div  className="forgot-container-wrapper">
            <div className="forgot-cont">
                <div className="email-div">
                    <input
                        type="text"
                        required
                        placeholder="Enter your Email"
                        onChange={handleMail}
                        value={mail}
                    />
                </div>

                <div className="otp-div">
                    <input
                        type="text"
                        required
                        placeholder="Enter OTP"
                        onChange={handleOtp}
                        value={otpp}
                    />
                    <button onClick={submitMail}>Send OTP</button>

                </div>

                <button  className='verify-btn' onClick={verifyOtp}>Verify OTP</button>

                {message && <p>{message}</p>}




            </div>
        </div>
    );
};

export default ForgotPage;
