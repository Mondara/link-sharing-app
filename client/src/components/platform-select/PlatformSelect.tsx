import React from 'react'

import { platformOptions } from '@/assets';
import { PlatformOptions } from '@/types';
import { Select } from '@/components';

interface Props {
    callback: (selectOption: PlatformOptions) => void;
    selectedOption: PlatformOptions;
}

export const PlatformSelect: React.FC<Props> = ({ callback, selectedOption }) => {

    const getSelectOption = (select: PlatformOptions) => {
        for (let i = 0; i < platformOptions.length; i++) {
            if (platformOptions[i].label === select) {

                return platformOptions[i];

            }
        }
    }

    return (
        <Select options={platformOptions} selectedOption={getSelectOption(selectedOption)} callback={callback} />
    )
}
