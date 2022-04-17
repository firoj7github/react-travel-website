import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from './Social/Social';



const Login = () => {
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = event =>{
        event.preventDefault ();
        const email = event.target.email.value;
      
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-from'>
            <h2>Please Login</h2>
            <from onSubmit={handleLogin} className='login-manage'>
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <input type="password" name="password" id=""
                placeholder='Enter your password' />
               <input type="submit" value="Login" />
            </from>
           <Social></Social>
            
        </div>
    );
};

export default Login;