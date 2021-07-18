import React, { useState } from 'react'
import {auth} from './Firebase';

const UserAuth = () => {
    const[data,setData]=useState({
        email:'',
        password:''
    })

   const {email,password}=data;

   const handleChange=e=>{
       setData({...data,[e.target.name]:e.target.value})
   }

   const signUp=(e)=>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email,password).then(user=>console.log(user)).catch(err=>console.log(err));

   }

   const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user=>console.log(user)).catch(err=>console.log(err));
  }

    return (
        <div>
            
            <h1>Authentication</h1> 
            <input type='email' name='email' value={email} placeholder='Email' onChange={handleChange}/> <br/> <br/>
            <input type='password' name='password' value={password} placeholder='Password' onChange={handleChange}/> <br/> <br/>
            <button onClick={signIn}>Sign in</button> &nbsp; &nbsp;
            <button onClick={signUp}>Sign up</button>
            
        </div>
    )
}

export default UserAuth;    
