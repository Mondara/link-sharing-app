import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { EmailIconSVG, PasswordIconSVG } from '@/assets';
import { Button, TextField } from '@/components';
import { useAuth } from '@/context';


export const LoginForm = () => {
    const { error, loading, login } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) return;

        await login(email, password);

        if (!error.loginError) {

            console.log("Navigating to Dashboard")
            navigate(from, { replace: true });
        }

    }


    return (
        <form className='login-form-container w-full' onSubmit={handleSubmit}>
            <TextField name="email" error={error.loginError != ''} errorMessage={error.loginError.match('User|Email') ? error.loginError : ''} icon={<EmailIconSVG />} labelText="EmailAddress" required placeholder="e.g. alex@email.com" />
            <TextField name="password" error={error.loginError != ''} errorMessage={error.loginError.includes('Password') ? error.loginError : ''} type="password" icon={<PasswordIconSVG />} labelText="Password" required placeholder="Enter your password" />
            <Button text={loading ? 'Loading...' : "Login"} type="submit" disabled={loading} />
        </form>
    )
}
