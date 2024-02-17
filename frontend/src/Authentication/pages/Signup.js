import React from 'react'

function Signup() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400pc] p-9'>
                    {/* Email Input */}
                    <label>Email</label>
                    <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
                    
            </form>
        </div>
        <div>
            <h2>SIGNUP</h2>
        </div>
    </div>
  )
}

export default Signup