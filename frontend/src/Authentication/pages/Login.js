import React, { useState, useEffect } from 'react' // this makes it so what the user enters actually gets stored in the database
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // so the user automatically gets rerouted to the login pager after a user signs up

function Login() {
    const [users, setUsers] = useState([])
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
      console.log(res.data) // just to check if its actually getting the data
    })
  }

  const handleLogin = async(event) => {
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:3001/login', 
        { username, password})
        const token = response.data.token
        alert('Login Successful')
        setUsername('')
        setPassword('')
        fetchUsers();
        navigate('/account')
        window.location.reload()
        localStorage.setItem('token', token)
    } catch(error){
        console.log('Login error')
    }

  }



  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col justify-center items-center'>
          {/* Create an account section */}
          <h2 className='text-3xl text-black mt-16'>Login</h2>
        <div className='w-[100%] h-[100%] bg-zinc-100 text-black flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleLogin}>
                    {/* Username Input */}
                    <label>Username</label>
                    <br />
                    <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />
                    {/* Password Input */}
                    <label>Password</label>
                    <br />
                    <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <br />
                    <button className='w-[200px] h-[50px] border hover:bg-blue-400'
                    type='submit'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login