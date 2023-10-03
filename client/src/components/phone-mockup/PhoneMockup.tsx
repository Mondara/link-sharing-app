import React from 'react'

import { IllustrationPhoneMockup } from '@/assets';
import { PhonePreviewLink } from '@/components';
import { getImageURL } from '@/utils';
import { ProfileData } from '@/types';

interface Props {
    profileData: ProfileData
}


export const PhoneMockup: React.FC<Props> = ({ profileData }) => {
    return (
        <div className="w-full h-full">
            <div className="phone-preview-container-layout phone-preview-container-styles">
                <div className="relative">
                    <IllustrationPhoneMockup />
                    <div className="phone-preview-links-container">
                        <div className={`phone-preview-profile-layout `}>
                            <div className="phone-preview-profile-img-container">
                                {profileData.avatar && (
                                    <img className="phone-preview-profile-img" src={getImageURL(profileData.avatar)} alt="Profile Avatar" />
                                )}
                            </div>
                            <div className="phone-preview-profile-details-layout bg-white">
                                <p className={`phone-preview-profile-details-name text-center min-h-[1rem] min-w-[10rem] ${profileData.firstName || profileData.lastName ? "bg-white" : "bg-skelton-grey"}`}>{profileData.firstName} {profileData.lastName}</p>
                                <p className={`phone-preview-profile-details-email min-h-[0.5rem] min-w-[4.5rem] ${profileData.email ? "bg-white" : "bg-skelton-grey"}`}>{profileData.email}</p>
                            </div>
                        </div>

                        <div className="grid gap-y-5">
                            {profileData.links?.map(link => (
                                <PhonePreviewLink key={link.id} platform={link.platform} link={link.link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

