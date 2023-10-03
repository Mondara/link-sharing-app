import React from 'react'
import { Outlet } from 'react-router';

import { HeaderProfile, PhoneMockup, SaveButton } from '@/components';
import { useProfileContext } from '@/context';


export const ProfileLayout = () => {
    const { profileData } = useProfileContext();


    return (
        <div className="w-full h-full">
            <div className="profile-header-outside-container-layout">
                <HeaderProfile />
            </div>
            <div className="profile-body-outside-container-layout">
                <div className="w-full h-full block tablet:hidden">
                    <PhoneMockup profileData={profileData} />
                </div>
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="max-h-[90%] profile-body-container-layout profile-body-container-styles">
                        <Outlet />
                    </div>
                    <div className="h-[9.4%] mt-[0.06rem] bg-white rounded-xl flex justify-end items-center">
                        {/*
                        {loading &&
                            <Indicator status="Loading" msg="Profile Data Loading..." />
                        }

                        {imageError && <Indicator status="Error" msg={imageError} />}
                        */}
                        <SaveButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

