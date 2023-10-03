import React, { useState } from 'react'

import { useProfileContext } from '@/context';
import { UploadImageIcon } from '@/assets'
import { getImageURL } from '@/utils';

export const UploadImage = () => {

    const [dragging, setDragging] = useState(false);
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    const { profileData, setAvatar, errors: { imageError } } = useProfileContext();

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);

        setAvatar(e.dataTransfer.files)
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAvatar(e.target.files)
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="group dragdrop-container-layout dragdrop-container-styles"
            style={{
                backgroundImage: profileData.avatar ? `url(${getImageURL(profileData.avatar)})` : "",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: dragging ? '1px solid purple' : ""
            }}
            onDragEnter={handleDragEnter}
            // onDragLeave={handleDragLeave}
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
            onClick={handleClick}
        >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
            />

            <div className={`dragdrop-layout text-purple ${imageError ? 'border-red text-red' : ''}  ${profileData.avatar ? "opacity-0" : "opacity-1"} group-hover:dragdrop-container-hover`}>
                <UploadImageIcon />
                <p className="heading-sm">+ Upload Image</p>
            </div>

            {dragging && <div className="dragdrop-element" onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop} />
            }
        </div>



    )
}
