import React from 'react';

interface ErrorAuth {
    loginError: string;
    registerError: string;
    otherError: string;
}

export interface AuthContextType {
    currentUser: string | null;
    error: ErrorAuth;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, confirmPassword: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);