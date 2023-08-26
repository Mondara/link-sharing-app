import React, { FC, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    text: string;
}

export const Button: FC<Props> = ({ variant = 'primary', text, ...rest }) => {
    const variantClass = {
        primary: `btn-primary ${!rest.disabled ? "hover:btn-primary-active" : ''} disabled:btn-primary-disabled`,
        secondary: `btn-secondary ${!rest.disabled ? "hover:btn-secondary-active" : ''} disabled:btn-secondary-disabled`
    }

    return (
        <button
            className={`btn ${variantClass[variant]} heading-sm`}
            {...rest}
        >
            {text}
        </button>
    )
}
