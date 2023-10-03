import React from 'react';

import { PlatformOptions } from '@/types';
import { RightArrowIcon, getPlatformIcon, getPlatformBackgroundColor } from '@/assets';

interface Props {
    platform: PlatformOptions;
    link: string;
}

export const PhonePreviewLink: React.FC<Props> = ({ platform, link }) => {


    return (
        <a href={link} target="_blank" rel="noreferrer" className={`phone-preview-link-container-layout rounded-lg ${platform === 'Frontend Mentor' ? "text-dark-grey border border-gray" : "text-white"}`}
            style={{ background: getPlatformBackgroundColor(platform) }}>
            <div className='phone-preview-link-text body-sm'>
                {getPlatformIcon(platform)}
                {platform}
            </div>
            <RightArrowIcon />
        </a>
    )
}
