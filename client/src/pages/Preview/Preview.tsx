import React from 'react'
import { useLoaderData } from 'react-router-dom';

import { useProfileContext } from '@/context';
import { PhoneMockup } from '@/components';
import { ProfileData } from '@/types';


export const Preview = () => {
    const params = useLoaderData() as ProfileData | null;
    const { profileData } = useProfileContext();

    const userData = profileData?.email ? profileData : params;

    return (
        <>
            {userData && <PhoneMockup profileData={userData} />}
        </>
    )
}

