import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  



 
    const onSubmit = (data) =>{JSON.stringify(data)}


  return (
    <div className='signup'>
      <form className='signup__form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='signup__heading'>Signup</h4>
        <input {...register("username", { required: true, maxLength: 20 })} placeholder='Username' className='username' name='username' type='text' />
        <div className='username__error'>{errors.username?.type==='required'&& "Username is required"}</div>
        <input {...register("number", { required: true, maxLength: 10 })} placeholder='Number' className='number' name='number' type='number' />
        <div className='number__error'>{errors.number?.type === 'required' && "Number is required"}</div>
        <input {...register("email", { required: true })} placeholder='Email' className='email' name='email' type='email' />
        <div className='email__error'>{errors.email?.type==='required' && "Email is required"}</div>
        <input {...register("password", { required: true, maxLength: 10, })} placeholder='Password' className='password' name='password' type='password' />
        <div className='password__error'>{errors.password?.type==='required' && "Password is required"}</div>
        <input className='signup__btn' type='submit' />
        <Link to='/login' className='already_account_link'><p className='already__account'>Already have an account?</p></Link>
      </form>
    </div>
  )
}

export default Signup