import React from 'react'
import { Link } from 'react-router-dom';

import { Button, TextField } from '@/components';
import { DevLinkLGSVG, EmailIconSVG, PasswordIconSVG } from '@/assets';


export const Signup = () => {
  return (
    <div className="login-outer-container w-full max-w-xl">
      <DevLinkLGSVG />
      <div className="login-body-container bg-white w-full ">
        <div className="login-header-container">
          <h1 className="heading-md text-dark-grey">Create account</h1>
          <p className="body-md text-gray">Let’s get you started sharing your links!</p>
        </div>
        <form className='login-form-container w-full'>
          <TextField icon={<EmailIconSVG />} labelText="Email address" required placeholder="e.g. alex@email.com" />
          <TextField icon={<PasswordIconSVG />} labelText="Create password" required placeholder="At least 8 characters" />
          <TextField icon={<PasswordIconSVG />} labelText="Confirm Password" required placeholder="At least 8 characters" />
          <p className="body-sm text-gray">Password must contain at least 8 characters</p>
          <Button text="Create new account" type="submit" />
        </form>
        <p className='body-md text-gray self-center'>Already have an account? <Link to="/">Login</Link></p>
      </div>

    </div>
  )
}