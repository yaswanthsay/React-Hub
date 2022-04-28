import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup'>
        <form className='signup__form'>
          <h4 className='signup__heading'>Signup</h4>
          <input placeholder='username' className='username' name='username' type='text'/>
          <input placeholder='number' className='number' name='number' type='number'/>
             <input placeholder='email' className='email' name='email' type='email'/>
             <input placeholder='password' className='password' name='password' type='password'/>
             <input className='signup__btn' type='submit'/>
             <Link to='/login' className='already_account_link'><p className='already__account'>Already have an account?</p></Link>
        </form>
    </div>
  )
}

export default Signup