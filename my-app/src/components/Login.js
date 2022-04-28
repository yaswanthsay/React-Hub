import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react';


function Login() {

  const [loginData,setLoginData] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{setLoginData(data)}

  

  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='login__heading'>Login</h4>
        <input {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder='Email' className='email' name='email' type='email' />
        <div className='email__error'> {errors.email?.type === 'required' && "Email is required"}</div>
        <input {...register("password", { required: true, maxLength: 10,minLength: 4 })} placeholder='Password' className='password' name='password' type='password' />
        <div className='password__error'>{errors.password?.type === 'required' && "Password is required"}</div>
        <input className='login__btn' type='submit' />
        <Link to='/signup' className='new_account_link'><p className='new__account'>Create new account?</p></Link>
        <p className='forgot__password'>Forgot password?</p>
      </form>
    </div>
  )
}

export default Login