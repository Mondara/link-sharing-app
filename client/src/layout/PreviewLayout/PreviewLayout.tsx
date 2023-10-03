import React from 'react'
import { Outlet } from 'react-router';

import { HeaderPreview } from '@/components';


export const PreviewLayout = () => {

    return (
        <div className="w-full h-full relative">
            <div className="absolute z-0 w-full h-[40%] rounded-b-3xl bg-purple" />
            <div className="profile-header-outside-container-layout relative z-10">
                <HeaderPreview />
            </div>
            <div className="profile-body-outside-container-layout">
                <Outlet />
            </div>
        </div>
    )
}

