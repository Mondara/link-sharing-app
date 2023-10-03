import React, { FC, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

import { AuthContext, AuthContextType } from './AuthContext';
import { loginRequest, registerRequest } from '@/services';
import { emailValidator, passwordValidator, getUser } from '@/utils';


export const useAuth = (): AuthContextType => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvide");
    }

    return context;
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(getUser || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        loginError: "",
        registerError: "",
        otherError: "",
    });


    const login = async (email: string, password: string) => {
        if (!email || !password) return;

        if (!emailValidator(email)) {
            setError(prev => ({
                ...prev,
                loginError: "Invalid Email"
            }));
            return;
        }

        if (!passwordValidator(password)) {
            setError(prev => ({
                ...prev,
                loginError: "Invalid Password"
            }));
            return;
        }


        try {
            setLoading(true);

            const user = await loginRequest(email, password);

            setCurrentUser(user)
            setError(prev => ({
                ...prev,
                loginError: ""
            }));

        } catch (err) {
            console.error("Login Failed: " + err);

            setError(prev => ({
                ...prev,
                loginError: err.message
            }));
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    }

    const register = async (email: string, password: string, confirmPassword: string) => {
        if (!email || !password) return;

        if (confirmPassword !== password) {
            setError(prev => ({
                ...prev,
                registerError: "Password Does not match"
            }));
            return;
        }

        if (!emailValidator(email)) {
            setError(prev => ({
                ...prev,
                registerError: "Invalid Email"
            }));
            return;
        }

        if (!passwordValidator(password)) {
            setError(prev => ({
                ...prev,
                registerError: "Invalid Password"
            }));
            return;
        }


        try {
            setLoading(true);

            await registerRequest(email, password);
            setError(prev => ({
                ...prev,
                registerError: ""
            }));
        } catch (err) {
            console.error("Registering Failed: " + err);
            setError(prev => ({
                ...prev,
                registerError: err.message
            }));
        } finally {
            setLoading(false)
        }

        toast.success("User Successfully Registered.");

    }

    const logout = () => { };



    return (
        <AuthContext.Provider value={{ currentUser, error, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}