import React from 'react';
import {Link } from "react-router-dom";

export default function () {    
  return (
    <div id='not-found'>
        <div className="not-found">
            <div className="404">
                <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p>The page you are looking for might currently unavailable.</p>
            <Link to='/'>Back To Home</Link>
        </div>
    </div>
  )
}

