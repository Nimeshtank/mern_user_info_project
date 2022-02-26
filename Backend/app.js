const express = require('express');

const dotenv = require('dotenv');
const app = express();

dotenv.config({path: './config.env'});                   //only need to write once

const PORT = process.env.PORT;                           // imported from config.env
require('./db/connection');   
// const User = require('./model/userSchema');           //import 
app.use(express.json());                                 //middleware ----json to object 
app.use(require('./router/auth.js'));                    //middleware

//linked router file

//middleware------------------------------------------>
// const middleware = (res, req, next)=>{
//      // console.log("hello my middleware");
// }


//route mention----------------------------------->

// app.get('/about', middleware, (req, res)=>{
//      res.send(`Hello res from Server about`);     //to send res to client from server
// });

         
app.listen(PORT, ()=>{
    console.log(`server is running at 3000`)    //server is listening
})

