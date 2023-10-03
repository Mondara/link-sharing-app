import React from 'react'
import { UploadImage, ProfileInput } from '@/components'

export const ProfileDetails = () => {
    return (
        <>
            <div className="w-full profileDetails-heading-container-layout">
                <h1 className="heading-md text-dark-grey">Profile Details</h1>
                <p className="body-md text-grey">Add your details to create a personal touch to your profile.</p>
            </div>

            <div className="w-full profileDetails-body-container-layout">
                <div className="w-full avatar-container-layout avatar-container-styles">

                    <div className="avatar-inner-container-layout text-grey mobile:avatar-inner-container-mobile-layout">
                        <p className="body-md w-max">Profile Picture</p>
                        <div className="profilePricture-upload-container-layout mobile:flex-col">
                            <UploadImage />
                            <p className="body-sm">Image must be below 1024x1024px.<br />Use PNG or JPG format.</p>
                        </div>
                    </div>

                </div>
                <ProfileInput />
            </div>
        </>
    )
}
