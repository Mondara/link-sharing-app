import React from 'react';
import { useNavigate } from 'react-router';

import { DevLinkLGSVG, DevLinkSMSVG, LinkHeaderIcon, ProfileDetailsHeaderIcon, PreviewHeaderIcon } from '@/assets';
import { Button, Tab } from '@/components';
import { useProfileContext } from '@/context'


export const HeaderProfile: React.FC = () => {
    const navigate = useNavigate();
    const { profileData: { firstName, lastName } } = useProfileContext();

    return (
        <div className="profile-header-container-layout profile-header-container-style">
            <div className="profile-header-inner-container-layout w-full">
                <div className="tablet:hidden">
                    <DevLinkLGSVG />
                </div>

                <div className="hidden tablet:block">
                    <DevLinkSMSVG />
                </div>

                <div className="flex flex-row gap-4">
                    <Tab icon={<LinkHeaderIcon />} text="Links" page="/" />
                    <Tab icon={<ProfileDetailsHeaderIcon />} text="Profile Details" page="profileDetails" />
                </div>

                <div className='block tablet:hidden'>
                    <Button text="Preview" variant='secondary' onClick={() => navigate(`/preview/${firstName}-${lastName}`)} />
                </div>
                <div className='hidden tablet:block'>
                    <Button icon={<PreviewHeaderIcon />} variant='secondary' onClick={() => navigate(`/preview/${firstName}-${lastName}`)} />
                </div>
            </div>
        </div>
    )
}
