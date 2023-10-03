import { LoadingIcon, ErrorIcon, SuccessIcon } from '@/assets';
import React from 'react'

interface IndicatorProps {
    status: 'Loading' | 'Error' | 'Success';
    msg: string;
}

export const Indicator: React.FC<IndicatorProps> = ({ status, msg }) => {
    return (
        <div className={`indicator-container ${status === 'Loading' ? 'bg-loading-blue' : (status === 'Error' ? 'bg-error-red' : 'bg-success-green')} `}>
            {
                status === 'Loading' ? <LoadingIcon /> : (status === 'Error' ? <ErrorIcon /> : <SuccessIcon />)
            }

            <p className="body-md text-white">{msg}</p>
        </div>
    )
}