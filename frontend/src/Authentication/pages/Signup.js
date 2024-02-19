import React, { useState, useEffect } from 'react' // this makes it so what the user enters actually gets stored in the database
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // so the user automatically gets rerouted to the login pager after a user signs up

function Signup() {

  const [user, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
      fetchUsers();
  }, [])
  
  const fetchUsers = () => {
    axios
    .get('http://localhost:3001/register')
    .then((res) => {
      //console.log(res.data) // just to check if its actually getting the data
    })
  }

  const handleRegister = (event) => {
      event.preventDefault()
      axios
      .post('http://localhost:3001/register', {email, username, password })
      .then(() => {
          alert('Account successfully created')
          setEmail('')
          setUsername('')
          setPassword('')
          fetchUsers()
          navigate('/login')
        })
      .catch((error) => {
          console.log('Unable to register user')
      })
  }


  return (
      <div className='w-full h-screen bg-zinc-100 flex flex-col justify-center items-center'>
          {/* Create an account section */}
          <h2 className='text-3xl text-black mt-16'>Create an Account</h2>
  
          {/* Registration form section */}
          <div className='w-full h-[100%] bg-zinc-100 text-black flex justify-center items-center'>
              <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onSubmit={handleRegister}>
                  {/* Email Input */}
                  <div className='mb-4'>
                      <label>School Email</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  
                  {/* Username Input */}
                  <div className='mb-4'>
                      <label>Username</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2'
                          type='text'
                          placeholder='Username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  
                  {/* Password Input */}
                  <div className='mb-6'>
                      <label>Password</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='password'
                          placeholder='Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  
                  <button className='w-[200px] h-[50px] border hover:bg-blue-400' type='submit'>Sign Up</button>
              </form>
          </div>
      </div>
  )
  
  
    // <div className='w-full h-screen flex'>
    //     <div className='w-[100%] h-[100%] bg-zinc-100 text-black flex justify-center items-center'>
    //         <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
    //         onSubmit={handleRegister}>
    //                 {/* Email Input */}
    //                 <label>School Email</label>
    //                 <br />
    //                 <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
    //                 type='text'
    //                 placeholder='Email'
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)} />
    //                 <br />
    //                 <br />
    //                 {/* Username Input */}
    //                 <label>Username</label>
    //                 <br />
    //                 <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2'
    //                 type='text'
    //                 placeholder='Username'
    //                 value={username}
    //                 onChange={(e) => setUsername(e.target.value)} />
    //                 <br />
    //                 <br />
    //                 {/* Password Input */}
    //                 <label>Password</label>
    //                 <br />
    //                 <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
    //                 type='password'
    //                 placeholder='Password'
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}/>
    //                 <br />
    //                 <br />
    //                 <button className='w-[200px] h-[50px] border hover:bg-blue-400'
    //                 type='submit'>Sign Up</button>

    //         </form>
    //     </div>
        
    // </div>
  
  //)
}

export default Signup