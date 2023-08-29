import React from 'react';

import { EmailIconSVG, PasswordIconSVG } from '../../assets';
import { Button, TextField } from '@/components';
import { login } from '@/services/auth-service';


const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(email, password)
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
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} error={error != ''} errorMessage={error.includes('User') ? error : ''} icon={<EmailIconSVG />} labelText="EmailAddress" required placeholder="e.g. alex@email.com" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} error={error != ''} errorMessage={error.includes('Password') ? error : ''} type="password" icon={<PasswordIconSVG />} labelText="Password" required placeholder="Enter your password" />
            <Button text="Login" type="submit" />
        </form>
    )
}

export default LoginForm