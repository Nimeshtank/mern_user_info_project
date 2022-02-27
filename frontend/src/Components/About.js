import React from 'react';
import './About.css';
import profilePic from '../Images/myImage.jpeg'

export default function About() {
  return (
    <>
      <div className='container mt-5 profile-container'>
        <form action="" >

          {/* Top profile part */}
          <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
              <img src={profilePic} alt="Profile-Pic" id='profile-pic' />
            </div>
            <div className="col-md-6 mt-5">
              <div className="profile-heading">
                <h5>Nimesh Tank</h5>
                <h6>Full Stack Developer</h6>
                <p className="profile-rating mt-3 mb-5">Rating: <span className="span-rating">1/10</span></p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Timeline</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 mt-5">
              <input type="submit" className="profile-edit-btn btn btn-light" value='Edit Profile' />
            </div>
          </div>

          {/* Profile Bottom Part */}
          <div className="row justify-content-center  ">
            {/* Left side  */}
            <div className="col-md-4 mb-5">
              <div className="profile-links mt-3">
                <p>Social Links</p>
                <a href="www.google.com">LinkedIn</a>
                <a href="www.google.com">GitHub</a>
              </div>
            </div>

            <div className="col-md-8 about-info mt-4">
              <div className="tab-content profile-tab" id='myTabContent'>

                {/* About Tab  */}
                <div class="tab-pane fade show active mb-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row ">
                    <div className="col-md-6 about-title">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>12524875631</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Nimesh Tank</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>nimesh.ytank@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>5481245879</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Tab */}
                <div class="tab-pane fade mb-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Beginer</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>5$</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

