import React, { useEffect, useState } from 'react';
import './About.css';
import profilePic from '../Images/myImage.jpeg'
import {useNavigate } from 'react-router-dom'

export default function About() {

  const [myData, setMyData] = useState({});
  const navigate = useNavigate();   

  const getAboutPage = async ()=>{
     try{
        const res = await fetch('/about', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type" : "application/json"
          },
          credentials: "include"
        });

        const data = await res.json();
        setMyData(data);
        console.log(myData);

        if(!res.status === 200){
           const error = new Error(res.error);
           throw error;
        }
     }catch(err){
         navigate('/login');
         console.log('Not Loged In!!')
     }
  }

  useEffect(()=>{
    getAboutPage();
  }, []);

  return (
    <>
      <div className='container mt-5 profile-container'>
        <form method='GET' >

          {/* Top profile part */}
          <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
              <img src={myData.name === "Nimesh Y. Tank" ? profilePic : "" } alt="Profile-Pic" id='profile-pic' />
            </div>
            <div className="col-md-6 mt-5">
              <div className="profile-heading">
                <h5>{myData.name}</h5>
                <h6>{myData.Profession}</h6>
                <p className="profile-rating mt-3 mb-5">Rating: <span className="span-rating">{`${(Math.random() * 10).toFixed(2)}/10`}</span></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Timeline</button>
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
                <a href="https://github.com/Nimeshtank?tab=repositories" target="_blank">GitHub</a>
              </div>
            </div>

            <div className="col-md-8 about-info mt-4">
              <div className="tab-content profile-tab" id='myTabContent'>

                {/* About Tab  */}
                <div className="tab-pane fade show active mb-4" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                      <p>{myData.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{myData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{myData.phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 about-title">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{myData.profession}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Tab */}
                <div className="tab-pane fade mb-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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


