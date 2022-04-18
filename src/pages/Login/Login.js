import React, { useState } from 'react';
import './Login.css'


import Social from './Social/Social';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';




const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    if(user){
        navigate('/');
    }
    
   
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event =>{
      navigate('/Register');
  }
    return (
        <div className='login-form'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='login-manage'>
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <input type="password" name="password" id=""
                placeholder='Enter your password' />
                <input type="submit" value="Login" />
            </form>
            <h4 className='login-tost-all'>New to genius car? <Link to='/Register' className='login-tost' onClick={navigateRegister}>Plz Register</Link></h4>
            <Social></Social>

        </div>
    );
};

export default Login;