import React from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from '@/components';
// import { ReactComponent as DevLinkSMSVG } from '@images/logo-devlinks-large.svg';

export const Login = () => {
    return (
        <div className="login-body-container bg-white w-full">
            <div className="login-header-container">
                <h1 className="heading-md text-dark-grey">Login</h1>
                <p className="body-md text-grey">Add your details below to get back into the app.</p>
            </div>
            <LoginForm />
            <p className='body-md text-grey self-center'>Don’t have an account? <Link to='../signup'>Create account</Link></p>
        </div>
    )
}

