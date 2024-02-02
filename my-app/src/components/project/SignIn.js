import React, { useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext.js';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const {handleLogin} = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement authentication logic here
    // Call onLogin() if authentication is successful
    handleLogin();
  };
  return (
    <div className="signin-container">
      <h2 className='sign-in'>Welcome</h2>
      <form>
        <div className='email'> 
          <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></div>
        <div className='password'>
          <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <Link to ='/home'>
           <button type="button" onClick={handleSignIn}>
          Login
        </button>
        </Link>
       
        
        
        
        
      </form>
    </div>
  );
};

export default SignIn;