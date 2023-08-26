import React from 'react';
import { Link } from 'react-router-dom';

import { DevLinkLGSVG, EmailIconSVG, PasswordIconSVG } from '../../assets';
import { Button, TextField } from '@/components';
// import { ReactComponent as DevLinkSMSVG } from '@images/logo-devlinks-large.svg';

export const Login = () => {
    return (
        <div className="login-outer-container w-full max-w-xl">
            <DevLinkLGSVG />
            <div className="login-body-container bg-white w-full">
                <div className="login-header-container">
                    <h1 className="heading-md text-dark-grey">Login</h1>
                    <p className="body-md text-gray">Add your details below to get back into the app.</p>
                </div>
                <form className='login-form-container w-full'>
                    <TextField icon={<EmailIconSVG />} labelText="Email address" required placeholder="e.g. alex@email.com" />
                    <TextField icon={<PasswordIconSVG />} labelText="Password" required placeholder="Enter your password" />
                    <Button text="Login" type="submit" />
                </form>
                <p className='body-md text-gray self-center'>Don’t have an account? <Link to='signup'>Create account</Link></p>
            </div>
        </div>
    )
}

