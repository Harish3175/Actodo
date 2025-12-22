import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const navigate= useNavigate()
  const [eusername,setEusername] = useState()
  const [epassword,setEpassword] = useState()

  const [ruser,setRuser] = useState(true)

  const users =props.users
  
  function handleUInput(evt)
  {
      setEusername(evt.target.value)
  }

  function handlePInput(evt)
  {
       setEpassword(evt.target.value)
  }

  function checkUser()
  {
    var userfound = false 
    
      users.forEach(function(item)
    {
      if(item.username === eusername && item.password === epassword)
      {
        userfound = true
        console.log("login successful")
        navigate("/landing", {state:{user:eusername}})
      }
    })

    if(userfound===false)
      {
        console.log("Login Failed")
        setRuser(false)
      }
  }

  return (
    <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <h1 className='text-2xl'>Hey Hi !</h1>
        {ruser?<p>I'll help you to manage your activities after you login : )</p>:<p className='text-red-500'>Please sign up before login</p>}

        <div className='flex flex-col gap-2 my-2'>
          <input type='text' 
          placeholder='UserName :'
          className='w-52 border border-black rounded-md p-1 bg-transparent' 
          onChange={handleUInput}/>

          <input type='text' 
          placeholder='Password :'
          className='w-52 border border-black rounded-md p-1 bg-transparent'
          onChange={handlePInput}/>

          <button className='bg-[#8272DA] w-24 p-1 rounded-md'
          onClick={checkUser}>Login</button>

          <p>Don't have an account? 
            <Link to={"/signup"} className='underline'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
