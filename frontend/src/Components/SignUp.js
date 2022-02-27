import React from 'react'
import { Link } from 'react-router-dom'
import signupimg from '../Images/signup-image.png'
import './Signup.css';

export default function Signup() {
  return (
    <>
      <section className='sign-up'>
        <div className='container  mt-5' >
          <div className='signup-content'>
            <div className='signup-form'>
              <h4 className='form-title'>Hi, let's get in touch</h4>
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
                  <input type="text" id="email" autoComplete='off' placeholder='Your Email' name='email' className='form-input-element'/>
                </div>
                <div className='form-input'>
                  <label htmlFor='phone'>
                    <i className="zmdi zmdi-smartphone-android"></i>
                  </label>
                  <input type="text" id="phone" autoComplete='off' placeholder='Phone Number' name='phone' className='form-input-element'/>
                </div>
                <div className='form-input'>
                  <label htmlFor='work'>
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" id="work" autoComplete='off' placeholder='Your Profession' name='work' className='form-input-element'/>
                </div>
                <div className='form-input'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="text" id="password" autoComplete='off' placeholder='Your Password' name='password' className='form-input-element'/>
                </div>
                <div className='form-input'>
                  <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="text" id="cpassword" autoComplete='off' placeholder='Confirm Password' name='cpassword' className='form-input-element'/>
                </div>
                <div className="form-input form-button">
                  <input type="submit" id='signup' name='signup' className='form-submit' value='register' />
                </div>
              </form>
            </div>
            <div className="signup-img">
              <figure className="signup-fig">
                <img src={signupimg} alt="SignIn-PNG" id='signimg' />
                <Link to='/login' className='signup-img-link'>I am already registered</Link>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}






