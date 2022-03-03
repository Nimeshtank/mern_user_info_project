import React, { useContext, useState } from 'react';
import './Login.css';
import loginImg from '../Images/login-vector.jpg'
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../App';

{/* <img src={loginImg} alt="LogIn-PNG" /> */ }
export default function LogIn() {

  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit= async (e)=>{

    e.preventDefault();
    const res = await fetch('/signin', {
      method : "POST",
      headers: {
      "Content-Type" :" application/json"
      },
      body : JSON.stringify({
        email:email, password: pass
      })
    });

    const data = await res.json();
    // console.log(data);

    if(res.status === 400 || !data){
      window.alert('Invalid login');
    }else{
      dispatch({type: "USER", payload: true})
      window.alert('successful login');
      navigate('/');
    }
  }
  return (
    <>
      <section className='sign-in'>
      
          <div className='signin-content'>
            <div className="signin-img">
              <figure className="signin-fig">
                <img src={loginImg} alt="SignIn-PNG" id='signin-img' />
                <Link to='/signup' className='signin-img-link'>Create an Account</Link>
              </figure>
            </div>

            <div className='signin-form'>
              <h4 className='form-title'>Sign In</h4>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-input'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input type="email" id="email" placeholder='Your Email' name='email' className='form-input-element' autoComplete='on' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='form-input'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="password" id="password" autoComplete='off' placeholder='Your Password' name='password' className='form-input-element' value={pass} onChange={(e)=> setPass(e.target.value)} />
                </div>
                <div className="form-button mt-3">
                  <input type="submit" id='signin' name='signin' className='form-submit' value='Log In' onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
      
      </section>

    </>
  )
}
