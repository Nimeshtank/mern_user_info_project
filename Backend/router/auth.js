const express = require('express');
const router = express.Router();  
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');                                      //router for backend

require('../db/connection');
const User = require('../model/userSchema');

router.get('/', (req, res) => {                                               //to send data to user
    res.send('Hello calling from Router auth.js');
});

router.post('/register', (req, res) => {                                     //to get data from user

    const { name, email, phone, profession, password, cpassword } = req.body;
    // console.log(req.body);  
    // console.log(req.body.email);  
    // console.log(email);  
    // res.json({message: req.body});       
    if (!name || !email || !phone || !profession || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
        //422 error code(req was well but not followed due to sementic error)
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already exist" });
            }else if(password !== cpassword){
                return res.status(422).json({ error: "Both passwords should be same" });

            }else{

                const user = new User({ name: name, email, phone, profession, password, cpassword }); // creating new instance
    
                user.save().then(() => {
                    res.status(201).json({ massage: "Successfully Registered" });
                }).catch((err) => {
                    res.status(500).json({ error: "Registration Failed" });
                })
            }



        }).catch((err) => { console.log(err) });

});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'All field are required' });
        }

        const userLogIn = await User.findOne({ email: email });

        //console.log(userSignIn)                                          // Gives Complete field-data
        
        
        if(userLogIn){
            const isMatched = await bcrypt.compare(password, userLogIn.password) ;
            let token = await userLogIn.generateAuthToken();
            // console.log(token); 
            
            res.cookie("jwttiken", token, {
                expires: new Date(Date.now() + 25892000000),               // 30days in (mili seconds)
                httpOnly: true
            });
            
            if (!isMatched) {
                res.status(400).json({ error: 'Invalid email or password' });
            }
            else {
                res.status(200).json({ massage: 'SignIn Successfully!!' });
            }
        }else{
            
            res.status(400).json({ error: 'Invalid email or password...' });
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;