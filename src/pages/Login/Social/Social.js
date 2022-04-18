import React from 'react';
import './Social.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
    return (
        <div>
             <button className='google-sign' onClick={()=>signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default Social;