import React from 'react';
import './Contact.css';

export default function Contact() {
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
                <i class="zmdi zmdi-email zmdi-hc-2x mdc-text-red text-success ms-2"></i>
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
                <i class="zmdi zmdi-pin-drop zmdi-hc-2x mdc-text-red text-success ms-2"></i>
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
                <form id="contact-form">
                  <div className="contact-form-inputs d-flex justify-content-between my-3">
                    <input type="text" className="form_input p-1 " placeholder='Your Name' required='true' />
                    <input type="email" className="form_input p-1" placeholder='Your Email' required='true' />
                    <input type="text" className="form_input p-1" placeholder='Your Mobile Number' required='true' />
                  </div>
                  <div className="contact-form-textarea mt-5">
                    <textarea className="text_field_contact " row='10' cols='30' placeholder='Message' ></textarea>
                  </div>
                  <div className="contact-form-button mt-4">
                    <button className="btn  btn-dark contact-submit-button">Send Message</button>
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





