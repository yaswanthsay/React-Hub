import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { JackInTheBox } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'


function Signup() {

  const [isSignup, setIsSignup] = useState()

  const[signedUp,setSignedUp] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => { setIsSignup(data) }


  useEffect(() => {
    let localSignup = localStorage.setItem("isSignup", JSON.stringify(isSignup))
     alert(localSignup)
  }, [isSignup])

  // useEffect(() => {
  //   let localSubmit = localStorage.getItem("isSubmit")
  //   alert(localSubmit)
  // }, [isSignup])


  return (
    <div className='signup'>
      <form className='signup__form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='signup__heading'>REACT HUB</h4>
        <input {...register("username", { required: true, maxLength: 20 })} placeholder='Username' className='username' name='username' type='text' />
        <div className='username__error'>{errors.username?.type === 'required' && "Username is required"}</div>
        <input {...register("number", { required: true, maxLength: 10 })} placeholder='Number' className='number' name='number' type='number' />
        <div className='number__error'>{errors.number?.type === 'required' && "Number is required"}</div>
        <input {...register("email", { required: true })} placeholder='Email' className='email' name='email' type='email' />
        <div className='email__error'>{errors.email?.type === 'required' && "Email is required"}</div>
        <input {...register("password", { required: true, maxLength: 10, })} placeholder='Password' className='password' name='password' type='password' />
        <div className='password__error'>{errors.password?.type === 'required' && "Password is required"}</div>
        <div>
          <JackInTheBox>
           <input className='signup__btn' type='submit' value='SIGNUP' />
          </JackInTheBox>
          <NavLink to='/login' className='already_accnt_link'><p className='already__accnt'>Already have an account?</p></NavLink>
        </div>
      </form>
    </div>
  )
}

export default Signup