import React from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Login/Social/Social';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/Login');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-from'>
            <h2>Plz Register</h2>
           <form onSubmit={handleRegister}>
               <input type="email" name="email" placeholder='Enter your email' id="" required/>
               <input type="password" placeholder='Enter your epassword' name="password" id="" required/>
               <input onClick={ navigateLogin} type="submit" value="Register" />
           </form>
           <h4>Already have an account? <Link to='/Login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Plz Login</Link></h4>
           <Social></Social>
        </div>
    );
};

export default Register;