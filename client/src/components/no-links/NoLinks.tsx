import React from 'react'

import { IllustrationEmpty } from '@/assets';

export const NoLinks = () => {
    return (
        <div className="link-container-layout link-container-styles w-full h-full">
            <div className="nolinks-container-layout nolinks-container-styles">
                <div>
                    <IllustrationEmpty />
                </div>
                <div className="text-center nolinks-text--layout">
                    <h2 className="heading-md text-dark-grey">Let&apos;s get you started</h2>
                    <p className="body-md text-grey">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                </div>
            </div>
        </div>
    )
}
