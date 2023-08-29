import React from 'react';
import { Outlet } from 'react-router-dom';

import { DevLinkLGSVG } from '../../../assets';


export const Auth = () => {
    return (
        <div className="login-outer-container w-full max-w-xl">
            <DevLinkLGSVG />
            <Outlet />
        </div>
    )
}