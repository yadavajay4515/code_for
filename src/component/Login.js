import React, { useState } from 'react'

import axios from 'axios'
export default function Login() {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
   const onSend=(e)=>{
    e.preventDefault();
    axios.post('',user).then((res)=>{


    })
   }

  return (
    <div>  
    <form 
    onSubmit={onSend}
        style={{ border: "2px solid black" }}
        className='container mt-3'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={user.email} onChange={handleChange} aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={handleChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
  )
}
