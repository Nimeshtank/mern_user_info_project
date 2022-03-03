import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signupimg from '../Images/signup-image.png'
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();                   //before Version 6 it was useHistory..
  const [user, setUser] = useState({
    name: '', email: '', phone: '', profession: '', password: '', cpassword: ''
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession, password, cpassword } = user;
    const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, profession, password, cpassword
        })
    })
    const data = await res.json();

    if(res.status === 422 || !data){
      window.alert('Invalid Reg')
      console.log('Invalid reg...')
    }else{
      window.alert('Successful Reg')
      console.log('Successful reg')

      // history.push('/login');
      navigate('/login')
    }
  }

  return (
    <>
      <section className='sign-up'>
        
          <div className='signup-content'>
            <div className='signup-form'>
              <h4 className='form-title'>Hi, let's get in touch</h4>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-input'>
                  <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" id="name" autoComplete='off' placeholder='Your Name' name='name' className='form-input-element' value={user.name} onChange={handleInputs} />
                </div>
                <div className='form-input'>
                  <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" id="email" autoComplete='off' placeholder='Your Email' name='email' className='form-input-element' value={user.email} onChange={handleInputs} />
                </div>
                <div className='form-input'>
                  <label htmlFor='phone'>
                    <i className="zmdi zmdi-smartphone-android"></i>
                  </label>
                  <input type="number" id="phone" autoComplete='off' placeholder='Phone Number' name='phone' className='form-input-element' value={user.phone} onChange={handleInputs} />
                </div>
                <div className='form-input'>
                  <label htmlFor='profession'>
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" id="profession" autoComplete='off' placeholder='Your Profession' name='profession' className='form-input-element' value={user.profession} onChange={handleInputs} />
                </div>
                <div className='form-input'>
                  <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" id="password" autoComplete='off' placeholder='Your Password' name='password' className='form-input-element' value={user.password} onChange={handleInputs} />
                </div>
                <div className='form-input'>
                  <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" id="cpassword" autoComplete='off' placeholder='Confirm Password' name='cpassword' className='form-input-element' value={user.cpassword} onChange={handleInputs} />
                </div>
                <div className=" form-button mt-2">
                  <input type="submit" id='signup' name='signup' className='form-submit' value='register' onClick={postData} />
                </div>
              </form>
            </div>
            <div className="signup-img">
              <figure className="signup-fig">
                <img src={signupimg} alt="SignUp-PNG" id='signimg' />
                <Link to='/login' className='signup-img-link'>I am already registered</Link>
              </figure>
            </div>
          </div>
       
      </section>
    </>
  )
}






