import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {auth, provider} from './config';
import { signInWithPopup} from 'firebase/auth';
import Home from './Home';



const Login = ({mode, toggleMode}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as making an API call to authenticate the user
    signInWithPopup(auth, provider).then((data)=>{
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <>
    {value ? <Home mode={mode} toggleMode={toggleMode}/> :
    <div className="container mt-5 p-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="my-5 py-4 card shadow " style={{borderRadius: "11px"}}>
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 text-muted">Login with Google</h2>
              <form onSubmit={handleSubmit}>
                <div className="text-center">
                  <Link onClick={handleSubmit}><FcGoogle style={{fontSize: "40px"}}/></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  </>
  );
};

export default Login;
