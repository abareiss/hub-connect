import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-around p-3 border-b border-purple-400 items-center bg-purple-300 text-white'>
        <Link to='/'> <h1 className ='text-3xl'>HubConnect</h1> </Link>
        <ul className='flex gap-6'>
            <Link to='/login'> <l1>Login</l1></Link>
            <Link to='/signup'> <l1>SignUp</l1></Link>          
        </ul>
    </nav>
  )
}

export default Navbar