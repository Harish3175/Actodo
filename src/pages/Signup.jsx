import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

  const navigate = useNavigate()
  const users = props.users
  const setusers = props.setusers

  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()

  function handleUInput(evt)
  {
      setEusername(evt.target.value)
  }

  function handlePInput(evt)
  {
       setEpassword(evt.target.value)
  }

  function addUser()
  {
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")
  }

  return (

    <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <h1 className='text-2xl'>Hey Hi</h1>
        <p>I'll help you to manage your activities after you login : )</p>

        <div className='flex flex-col gap-2 my-2'>
          <input type='text'
            placeholder='UserName :'
            className='w-52 border border-black rounded-md p-1 bg-transparent'
            onChange={handleUInput} />

          <input type='text'
            placeholder='Password :'
            className='w-52 border border-black rounded-md p-1 bg-transparent'
            onChange={handlePInput} />

          <input type='text'
            placeholder='Confirm password :'
            className='w-52 border border-black rounded-md p-1 bg-transparent' />

          <button className='bg-[#FCA201] w-24 p-1 rounded-md' onClick={addUser}>Sign Up</button>

          <p>Already have an account?
            <Link to={"/"} className='underline'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
