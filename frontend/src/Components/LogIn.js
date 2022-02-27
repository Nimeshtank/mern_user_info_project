import React from 'react';
import './Login.css';
import loginImg from '../Images/login-vector.jpg'
import { Link } from 'react-router-dom';

{/* <img src={loginImg} alt="LogIn-PNG" /> */ }
export default function LogIn() {
  return (
    <>
      <section className='sign-in'>
        <div className='container  mt-5' >
          <div className='signin-content'>
            <div className="signin-img">
              <figure className="signin-fig">
                <img src={loginImg} alt="SignIn-PNG" id='signin-img' />
                <Link to='/signup' className='signin-img-link'>Create an Account</Link>
              </figure>
            </div>

            <div className='signin-form'>
              <h4 className='form-title'>Log In</h4>
              <form className='register-form' id='register-form'>
                <div className='form-input'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" id="name" autoComplete='off' placeholder='Your Name' name='name' className='form-input-element' />
                </div>
                <div className='form-input'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="text" id="email" autoComplete='off' placeholder='Your Email' name='email' className='form-input-element' />
                </div>
                <div className="form-input form-button">
                  <input type="submit" id='signin' name='signin' className='form-submit' value='Log In' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
