'use client'
import React, { useState } from 'react'

const page = () => {
    const [name, setName] = useState('')
    const [email,setEmail]=useState('')
    const [number, setNumber] = useState('')
    const [pass, setPass] = useState('');
    const [con, setCon] = useState('');


    // console.log(name, email, number, pass);
    const formValue={}
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || !isNaN(name)) {
            alert('please provide a name')
        }
        else if (number < 10) {
            alert('please provide 10 digit numebr')
        }
        else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+-=]).{8,}$/.test(pass)) {
            alert('please provide strong password')
        }
        else if (con === "" || pass !== con) {
            alert("password doesn't match")
        }
            
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            alert('please provide a valid email')
        }
        else {
            alert('successfully submitted the form')
            const formData={
                name,
                number,
                email
            }
           console.log(formData);
    
        }
       
  }
   
  return (
      <div className='py-[100px] mx-auto '>
          <h1 className='text-center'>simple form</h1>
          <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 justify-center'>
              <div className="">
                  <label htmlFor="">Name</label> <br />
                  <input placeholder='Name' onChange={(e)=>setName(e.target.value)} type="text" name={name} className='border py-2 px-4' />
              </div>
              <div className="">
                  <label htmlFor="">email</label> <br />
                  <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type="email" name={email} className='border py-2 px-4' />
              </div>
              <div className="">
                  <label htmlFor="">password</label> <br />
                  <input placeholder='password' onChange={(e)=>setPass(e.target.value)} type="password" name={pass} className='border py-2 px-4' />
              </div>
              <div className="">
                  <label htmlFor="">confirm password</label> <br />
                  <input placeholder='con' onChange={(e)=>setCon(e.target.value)} type="password" name={con} className='border py-2 px-4' />
              </div>
              <div className="">
                  <label htmlFor="">phone</label> <br />
                  <input placeholder='Number' type="number" onChange={(e)=>setNumber(e.target.value)} name={number} className='border py-2 px-4' />
              </div>
              <div className="">
                  <input type="submit" className='text-center  bg-sky-300 px-4 py-2 rounded-lg' />
              </div>
    </form>
    </div>
  )
}

export default page