import React from 'react'

import { platformOptions } from '@/assets';
import { PlatformOptions } from '@/types';
import { Select } from '@/components';

interface Props {
    callback: (selectOption: PlatformOptions) => void;
}

export const PlatformSelect: React.FC<Props> = ({ callback }) => {
    return (
        <Select options={platformOptions} defaultSelectedOption={platformOptions[0]} callback={callback} />
    )
}
