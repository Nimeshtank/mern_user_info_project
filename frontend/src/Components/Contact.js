import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      {/* contact info grid */}
      <div className="contact-info mt-5">
        <div className="container">
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
      
    </>
  )
}




