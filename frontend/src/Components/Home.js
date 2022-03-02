import React, {useState, useEffect} from 'react';
import './Home.css'


export default function Home() {
  const [userName, setuserName] = useState('');
  const [hasName, setHasName] = useState(false);

  const HomePage = async ()=>{
     try{
        const res = await fetch('/getdata', {
          method: "GET",
          headers: {
            "Content-Type" : "application/json"
          }
        });

        const data = await res.json();
        setuserName(data.name);
        setHasName(true);
 
        if(!res.status === 200){
           const error = new Error(res.error);
           throw error;
        }
     }catch(err){
         console.log('Home Page : Not Loged In!!');
         console.log(err);
     }
  }

  useEffect(()=>{
    HomePage();
  }, []);

  return (
    <div className='container text-center mt-5' >
      <div className="welcome fst-italic text-primary"><h2>Welcome</h2></div>
      <div className="name fw-bolder" ><h1>{userName}</h1></div>
      <p className="happy text-success fw-bold">{hasName ? "Happy to see you back!! 😊" : "To Web Developer's Universe"} </p>

    </div>
  )
}
