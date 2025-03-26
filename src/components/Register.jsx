import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

  const navigate=useNavigate()

  const [form,setForm]=useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{

    setForm({...form,[e.target.name]:e.target.value})

  }

  const  handleSubmit=async (e)=>{

    e.preventDefault();

    try{

    const {data} = await axios.post('https://e-commerce-final-backend-production.up.railway.app/register',form)

    if(data.success){

      alert('Registered Successfully')
      navigate('/login')

    }else{
      alert(data.message)
    }
    }catch(err){
      if(err.response){
        alert(err.response.data.message);
      }else{
        alert("An error occured")
      }
    }

  }



  return (
    <div className='register'>
      <div className="form-cont">
      <h1>REGISTER</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={handleChange} name='name' placeholder='Enter your name'/>
        <input type="text" required name='email' onChange={handleChange}  placeholder='Enter your email'/>
        <input type="text" required name='password'  onChange={handleChange} placeholder='Password'/>

      

        <button type='submit'>Register</button>


      </form>
      <div className="all">

      <p>Already have an account? <span><Link to='/login'>Login here</Link></span></p>
      </div>

      </div>
    </div>
  )
}

export default Register
