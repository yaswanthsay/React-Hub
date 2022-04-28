import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <form className='login__form'>
          <h4 className='login__heading'>Login</h4>
             <input placeholder='email' className='email' name='email' type='email'/>
             <input placeholder='password' className='password' name='password' type='password'/>
             <input className='login__btn' type='submit'/>
             <Link to='/signup' className='new_account_link'><p className='new__account'>Create new account?</p></Link>
             <p className='forgot__password'>Forgot password?</p>
        </form>
    </div>
  )
}

export default Login