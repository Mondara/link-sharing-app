import React from 'react';

import { DevLinkLGSVG, LinkHeaderIcon, ProfileDetailsHeaderIcon } from '@/assets';
import { Button, Tab } from '@/components';

export const Header = () => {
    return (
        <div className="col-span-2 row-span-1 profile-header-container-layout profile-header-container-style">
            <DevLinkLGSVG />

            <div className="flex flex-row gap-4">
                <Tab icon={<LinkHeaderIcon />} text="Links" />
                <Tab icon={<ProfileDetailsHeaderIcon />} text="Profile Details" />
            </div>

            <div>
                <Button text="Preview" variant='secondary' />
            </div>
        </div>
    )
}
