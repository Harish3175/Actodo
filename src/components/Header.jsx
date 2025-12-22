import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-medium">Hello {props.username} !</h1>
      <p>I will help you to manage your activities:)</p>
    </div>
  )
}

export default Header
