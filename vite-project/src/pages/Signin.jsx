import React from 'react'

const Signin = () => {
  return (
    
    <div>
    <form style={{textAlign: 'center', flexDirection: 'column', gap: '10px'}} className='signin-form'>
      <input type="text" placeholder='Email' /><br /><br />
      <input type="password" placeholder='Password' /><br /><br />
      <button className='signin-btn'>Sign In</button> 
    </form>
    
    </div>
  )
} 


export default Signin