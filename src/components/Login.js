import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';
import login from "./images/Login/login.png";



const Login = ({ mode, toggleMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as making an API call to authenticate the user
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <>
      {value ? <Home mode={mode} toggleMode={toggleMode} /> :
        <div className="container dd my-5 py-5">
          <div className="content text-start justify-content p-5">
            <p style={{ fontSize: '60px', fontWeight: 'bold', color: mode === 'dark' ? 'white' : 'black' }}>Code Campus</p>
            <p style={{ fontSize: '30px', fontWeight: 'bold', color: mode === 'dark' ? 'white' : 'black' }} className="mt-0">Ambalika's Placement Assistant</p>
            <p style={{ fontSize: '20px', color: mode === 'dark' ? 'white' : 'black' }} className="mt-0">An online learning website dedicated to helping students learn how to code. Our mission is to provide a supportive and engaging learning environment that empowers students to achieve their goals and build a brighter future.</p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="text-start mt-4">
                  <Link onClick={handleSubmit} className={`btn btn-outline-${mode==='dark'?'warning':'primary'}`} style={{fontSize: "20px", fontWeight: 'initial'}}>Login with <FcGoogle /></Link>
                  <Link to="/about" className={`mx-4 btn btn-outline-${mode==='dark'?'warning':'primary'}`} style={{fontSize: "20px", fontWeight: 'initial'}}>About us</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="content text-end justify-content p-5">
            <img src={login} alt="login" />
          </div>
        </div>
      }
    </>
  );
};

export default Login;
