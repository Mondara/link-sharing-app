import React from 'react'
import { TextField } from '@/components';
import { useProfileContext } from '@/context';

export const ProfileInput = () => {
  const { profileData, updateProfileDetails, errors } = useProfileContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedDetails = {
      ...profileData,
      [e.target.name]: e.target.value
    }

    updateProfileDetails(updatedDetails)
  }

  return (
    <div className='w-full profileDetails-input-outercontainer-layout profileDetails-input-outercontainer-styles'>
      <div className='profileDetails-input-container-layout'>
        <p className='min-w-fit w-60'>First Name*</p>
        <TextField name='firstName' type="text" placeholder="e.g. John" required value={profileData.firstName} onChange={handleChange} error={errors.firstNameError !== ""} errorMessage={errors.firstNameError} />
      </div>

      <div className='profileDetails-input-container-layout'>
        <p className='min-w-fit w-60'>Last Name*</p>
        <TextField name='lastName' type="text" placeholder="e.g. Appleseed" required value={profileData.lastName} onChange={handleChange} error={errors.lastNameError !== ""} errorMessage={errors.lastNameError} />
      </div>

      <div className='profileDetails-input-container-layout'>
        <p className='min-w-fit w-60'>Email</p>
        <TextField name="email" type="email" placeholder="e.g. email@example.com" required value={profileData.email} onChange={handleChange} error={errors.emailError !== ""} errorMessage={errors.emailError} />
      </div>

    </div>
  )
}
