"use client"
import axios from 'axios';
import React,{useState} from 'react'

const Page = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
   
  }




   console.log(userData)
  const handlesubmit =async (e) => {
    e.preventDefault();
    console.log(userData);

    const response = await axios.post('http://localhost:1337/api/auth/local',{
      identifier: userData.email,
      password: userData.password,
    })
    console.log(response.data.jwt);
    console.log(response.data);

    console.log(response.data.user.username);
  }

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-6">

            
            <div className='mb-3'>
              <label htmlFor="">Email</label>
              <input className='form-control'  type="email" name='email' onChange={handlechange} />
            </div>
            <div className='mb-3'>
              <label htmlFor="">Password</label>
              <input className='form-control'  type="password" name='password' onChange={handlechange} />
            </div>
            <button className='btn btn-primary' onClick={handlesubmit}>Submmit</button>

        </div>
        </div>
      </div>
      
    </>
  )
}

export default Page