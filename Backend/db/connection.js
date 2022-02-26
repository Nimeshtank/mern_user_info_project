const mongoose = require('mongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB
    // ,{
    //      useNewUrlParser: true,        //write otherwise shows a Deprication Warning
    //      useCreateIndex: true,
    //      useUnifiedTopology: true,
    //      useFindAndModify: false       //note it is false
    // }
).then(()=>{
    console.log(`connection successfull`);
  }).catch((err)=>{
    console.log(err);
  });