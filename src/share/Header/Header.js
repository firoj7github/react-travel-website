import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = ()=>{
        signOut(auth);
    }
    return (
        
            <div className='header-all'>
                <nav>
                <Link to='/'>Home</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/About'>About</Link>
                {
                    user ? 
                    <a onClick={handleSignout}  href="">Signout</a>
                    :


                    <Link to='/Login'>Login</Link>}
            </nav>
            </div>
            
            
      
        
    );
};

export default Header;