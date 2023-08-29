import React from 'react'
import { Link } from 'react-router-dom';

import { SignupForm } from '@/components';


export const Signup = () => {
  return (
    <div className="login-body-container bg-white w-full ">
      <div className="login-header-container">
        <h1 className="heading-md text-dark-grey">Create account</h1>
        <p className="body-md text-gray">Let’s get you started sharing your links!</p>
      </div>
      <SignupForm />
      <p className='body-md text-gray self-center'>Already have an account? <Link to="../login">Login</Link></p>
    </div>
  )
}