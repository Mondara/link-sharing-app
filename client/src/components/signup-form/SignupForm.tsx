import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/context';
import { TextField, Button } from '@/components';
import { EmailIconSVG, PasswordIconSVG } from '@/assets';


export const SignupForm = () => {
    const { register, error, loading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;


        await register(email, password, confirmPassword);

        if (!error.registerError) { return navigate(from, { replace: true }) }
    }


    return (
        <form className='login-form-container w-full' onSubmit={handleSubmit}>
            <TextField name="email" error={error.registerError != ''} errorMessage={error.registerError.includes('Password') ? '' : error.registerError} icon={<EmailIconSVG />} labelText="Email address" required placeholder="e.g. alex@email.com" />
            <TextField name="password" error={error.registerError != ''} errorMessage={error.registerError.includes('Email') ? '' : error.registerError} type="password" icon={<PasswordIconSVG />} labelText="Create password" required placeholder="At least 8 characters" />
            <TextField name="confirmPassword" error={error.registerError != ''} errorMessage={error.registerError.includes('Email') ? '' : error.registerError} type="password" icon={<PasswordIconSVG />} labelText="Confirm Password" required placeholder="At least 8 characters" />
            <p className="body-sm text-grey">Password must contain at least 8 characters</p>
            <Button text={loading ? 'Loading...' : "Create new account"} type="submit" disabled={loading} />
        </form>
    )
}
