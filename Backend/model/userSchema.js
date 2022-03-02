const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },
    messages:[
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [                                     //stores token every time user sign-in
        {
            token:{
                type: String,
                required: true 
            }
        }
    ]
});

//Hashing of Passwords

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 5);
        this.cpassword = await bcrypt.hash(this.cpassword, 5);
    }
    next();
});

//generation of token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);    //generate new tocken
        this.tokens = this.tokens.concat({token: token});                 //stores the new token into token key of tokens
        await this.save();
        return token;
    }catch(err){
            console.log(err);
    }
}

// Add user message
userSchema.methods.addMessage = async function(name, email, phone, message){
    try{
        this.messages = this.messages.concat({name: name, email:email, phone:phone, message: message});
        await this.save();
        return this.messages;
    }catch(err){
        console.log(err)
    }
}

//creation of collection----------------------------------------->

const User = mongoose.model('USER-Info', userSchema);

module.exports = User;