import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { isAuthenticated } from '@/utils';

interface Props {
    children: React.ReactNode;
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
}