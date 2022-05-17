import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {JackInTheBox} from 'react-awesome-reveal'


function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{alert(JSON.stringify(data))}


  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='login__heading'>REACT HUB</h4>
        <input {...register("email", { required: true})} placeholder='Email' className='email' name='email' type='email' />
        <div className='email__error'> {errors.email?.type === 'required' && "Email is required"}</div>
        <input {...register("password", { required: true, maxLength: 10,minLength: 4 })} placeholder='Password' className='password' name='password' type='password' />
        <div className='password__error'>{errors.password?.type === 'required' && "Password is required"}</div>
        <div className='login__new'>
          <JackInTheBox>
        <input className='login__btn' type='submit' value='LOGIN'/>
        </JackInTheBox>
        {/* <NavLink to='/signup' className='new_account_link'><p className='new__account'>Create new account?</p></NavLink> */}
      <NavLink to='/signup' className='new_accnt_link'><p className='new__accnt'>Create new account?</p></NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login