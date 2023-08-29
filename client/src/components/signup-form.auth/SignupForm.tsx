import React from 'react';

import { register } from '@/services/auth-service';
import { TextField, Button } from '@/components';
import { EmailIconSVG, PasswordIconSVG } from '@/assets';
import { emailValidator } from '@/utils';

export const SignupForm = () => {
    const [email, setEmail] = React.useState('');


    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            setError("Password Does not match");
            return;
        }

        if (!emailValidator(email)) {
            setError("Invalid Email");
            return;
        }

        register(email, password)
            .then(response => {
                console.log(response)
                setError('');
            }).catch(err => {
                console.error(err.response.data.message);
                setError(err.response.data.message);
            })
    }
    return (
        <form className='login-form-container w-full' onSubmit={handleSubmit}>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} error={error != ''} errorMessage={error.includes('Password') ? '' : error} icon={<EmailIconSVG />} labelText="Email address" required placeholder="e.g. alex@email.com" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} error={error != ''} errorMessage={error.includes('Email') ? '' : error} type="password" icon={<PasswordIconSVG />} labelText="Create password" required placeholder="At least 8 characters" />
            <TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={error != ''} errorMessage={error.includes('Email') ? '' : error} type="password" icon={<PasswordIconSVG />} labelText="Confirm Password" required placeholder="At least 8 characters" />
            <p className="body-sm text-gray">Password must contain at least 8 characters</p>
            <Button text="Create new account" type="submit" />
        </form>
    )
}
