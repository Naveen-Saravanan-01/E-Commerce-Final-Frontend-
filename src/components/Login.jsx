import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './Register.css'

const Login = () => {


  const navigate =useNavigate();



  const [form,setForm]=useState({
    
    email:"",
    password:""
  });

  const handleChange=(e)=>{

    setForm({...form,[e.target.name]:e.target.value})

  }

  const  handleSubmit=async (e)=>{

    e.preventDefault();

    try{

    const {data} = await axios.post('https://e-commerce-final-backend.onrender.com/login',form)

    if(data.success){
      localStorage.setItem('token',data.token)
      alert('Login Successfully')
      navigate('/')
    }else{
        alert(data.message)
    }

   

    



    }catch(err){
      alert(err.response?.data?.message || "Login failed");
    }

  }




  return (
  <div className='register'>

    <div className='form-cont'>

      <h1>LOGIN</h1>

    <form onSubmit={handleSubmit}>

      <input type="text" required name='email' onChange={handleChange} placeholder='Enter your email'/>
      <input type="text" required name='password'  onChange={handleChange} placeholder='Password'/>

      <button type='submit'>Log In</button>

      </form>

      <p>Already have an account? <span><Link to='/register'>Login here</Link></span></p>

      </div>  

    </div>
  )
}

export default Login




// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://localhost:4000/api/users/login", form);
//       if (data.success) {
//         localStorage.setItem("token", data.token); // Save JWT token
//         navigate("/profile"); // Redirect to profile page
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
