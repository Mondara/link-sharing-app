import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { Button } from '@/components';


export const HeaderPreview: React.FC = () => {
    const navigate = useNavigate();

    const handleShareLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link Copied");
    }

    return (
        <div className="preview-header-container-layout preview-header-container-style">
            <div className="w-full flex justify-between items-center">
                <div>
                    <Button text="Back to Editor" variant="secondary" onClick={() => navigate("/")} />
                </div>

                <div>
                    <Button text="Share Link" variant='primary' onClick={handleShareLink} />
                </div>
            </div>
        </div>
    )
}
