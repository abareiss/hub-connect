import React, { useState, useEffect } from 'react' // this makes it so what the user enters actually gets stored in the database
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // so the user automatically gets rerouted to the login pager after a user signs up

function Signup() {
  const [user, setUsers] = useState([])
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [dob, setDOB] = useState('')
  const [universityname, setUniversityName] = useState('')
  const [email, setEmail] = useState('')
  const [personalemail, setPersonalEmail] = useState('')
  //const [username, setUsername] = useState('')
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
      .post('http://localhost:3001/register', {firstname, lastname, dob, universityname, email, password})
      .then(() => {
          alert('Account successfully created')
          setFirstName('')
          setLastName('')
          setDOB('')
          setUniversityName('')
          setEmail('')
          setPersonalEmail('')
          //setUsername('')
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
              <form className='text-center border rounded-lg p-9' onSubmit={handleRegister}>
                  {/* First Name Input */}
                  <div className='mb-4'>
                      <label>First Name</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='First Name'
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)} />
                  </div>

                  {/* Last Name Input */}
                  <div className='mb-4'>
                      <label>Last Name</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='Last Name'
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)} />
                  </div>

                  {/* DOB Input */}
                  <div className='mb-4'>
                      <label>Date of Birth</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='Date of Birth (MM/DD/YYYY)'
                          value={dob}
                          onChange={(e) => setDOB(e.target.value)} />
                  </div>

                  {/* University Name Input */}
                  <div className='mb-4'>
                      <label>University Name</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='University Name'
                          value={universityname}
                          onChange={(e) => setUniversityName(e.target.value)} />
                  </div>


                  <div className='mb-4'>
                      <label>School Email</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='School Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className='mb-4'>
                      <label>Personal Email</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='text'
                          placeholder='Personal Email'
                          value={email}
                          onChange={(e) => setPersonalEmail(e.target.value)} />
                  </div>
                  
                  {/* Username Input
                  <div className='mb-4'>
                      <label>Username</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2'
                          type='text'
                          placeholder='Username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                  </div> */}
                  
                  {/* Password Input */}
                  <div className='mb-6'>
                      <label>Password</label>
                      <br />
                      <input className='w-[400px] h-[40px] rounded-xl bg-purple-300 p-2' 
                          type='password'
                          placeholder='Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                    <div>
                    <legend>Gender:</legend>
                         <input type="radio" id="genderChoice1" name="gender" value="male" />
                            <label for="genderChoice1">Male</label>

                        <input type="radio" id="genderChoice2" name="gender" value="female" />
                             <label for="genderChoice2">Female</label>

                        <input type="radio" id="genderChoice3" name="gender" value="nonbinary" />
                            <label for="genderChoice3">Non-Binary</label>
                     </div>

                     <div>
                    <legend>Who do you want to dorm with?:</legend>
                         <input type="radio" id="dormChoice1" name="dorm" value="male" />
                            <label for="dormChoice1">Male</label>

                        <input type="radio" id="dormChoice2" name="dorm" value="female" />
                             <label for="dormChoice2">Female</label>

                        <input type="radio" id="dormChoice3" name="dorm" value="coed" />
                            <label for="dormChoice3">Co-Ed</label>
                     </div>
                  </div>
                  
                  <button className='w-[200px] h-[50px] border hover:bg-blue-400' type='submit' onClick={() => { window.location.href = '/aboutmesignup'; }}>Next</button>
              </form>
          </div>
      </div>
  )
}

export default Signup