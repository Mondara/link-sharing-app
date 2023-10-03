import React from 'react';

import { Button } from '@/components';
import { useProfileContext } from '@/context';

export const SaveButton = () => {

    const { saveProfileData, saveBtnDisabled, loading } = useProfileContext();

    return (
        <div className="save-button-container">
            <Button variant="primary" text={loading ? 'Loading...' : "Save"} onClick={saveProfileData} disabled={saveBtnDisabled} />
        </div>
    )
}
