import React from 'react';
import './Contact.css';
import {useState, useEffect} from 'react';

export default function Contact() {

  const [myData, setMyData] = useState({name: "", email: "", phone:"", message:""});

  const ContactPageData = async ()=>{
     try{
        const res = await fetch('/about', {
          method: "GET",
          headers: {
            "Content-Type" : "application/json"
          }
        });

        const data = await res.json();
        setMyData({...myData, name: data.name, email: data.email, phone: data.phone});
        // console.log(myData);
 
        if(!res.status === 200){
           const error = new Error(res.error);
           throw error;
        }
     }catch(err){
         console.log('Contact Page : Not Loged In!!');
         console.log(err);
     }
  }

  useEffect(()=>{
    ContactPageData();
  }, []);

  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setMyData({...myData, [name]: value})
  }

  const submitContactData= async (e) =>{
    e.preventDefault();
    const {name, email, phone, message} = myData;

    const res = await fetch("/contact" , {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name, email, phone, message
      })
    })

    const data = await res.json();
    if(!data.name || !data.email || !data.phone || !data.message){
      alert('Message not sent, Fill all data');
    }else{
      alert('Your mesaage sent');
      setMyData({...myData, message: ""});
    }
  }


  return (
    <>
      {/* contact info grid */}
      <div className="contact-info mt-5">
        <div className="container ">
          <div className="row justify-content-around">
            <div className="col-lg-10  d-flex justify-content-between ">
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <i className="zmdi zmdi-smartphone-iphone zmdi-hc-2x mdc-text-red text-success ms-2" />
                <div className="contact-info-content ms-4 ">
                  <div className="contact-info-title fw-bold text-success">
                    Phone
                  </div>
                  <div className="contact-info-value">
                    +91 91174511110
                  </div>
                </div>
              </div>

              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <i className="zmdi zmdi-email zmdi-hc-2x mdc-text-red text-success ms-2"></i>
                <div className="contact-info-content ms-4">
                  <div className="contact-info-title fw-bold text-success">
                    Email
                  </div>
                  <div className="contact-info-value">
                    nimesh.ytank@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <i className="zmdi zmdi-pin-drop zmdi-hc-2x mdc-text-red text-success ms-2"></i>
                <div className="contact-info-content ms-4">
                  <div className="contact-info-title fw-bold text-success">
                    Address
                  </div>
                  <div className="contact-info-value">
                    Nagpur, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <div className="contact-form">
        <div className="container  my-5">
          <div className="row justify-content-around">
            <div className="col-lg-9 form-container">
              <div className="contact-form-container m-5">
                <div className="contact-form-title fw-bold fs-3">
                  Contact Us
                </div>
                <form id="contact-form" method='POST'>
                  <div className="contact-form-inputs d-flex justify-content-between my-3">
                    <input type="text" className="form_input p-1 " placeholder='Your Name' value={myData.name}  name='name'  onChange={handleChange} required={true} />
                    <input type="email" className="form_input p-1" placeholder='Your Email' value={myData.email}  name='email'   onChange={handleChange} required={true} />
                    <input type="text" className="form_input p-1" placeholder='Your Mobile Number' value={myData.phone}  name='phone' onChange={handleChange}  required={true} />
                  </div>
                  <div className="contact-form-textarea mt-5">
                    <textarea className="text_field_contact " row='10' cols='30' placeholder='Message' value={myData.message} name='message' onChange={handleChange} ></textarea>
                  </div>
                  <div className="contact-form-button mt-4">
                    <button className="btn  btn-dark contact-submit-button" onClick={submitContactData}>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}





