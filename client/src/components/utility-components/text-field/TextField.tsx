import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    errorMessage?: string;
    icon?: JSX.Element;
    labelText?: string;
}

export const TextField: FC<Props> = ({ labelText, error, errorMessage, icon, ...rest }) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    return (

        <div className="flex flex-col w-full">
            {labelText && (
                <label htmlFor="text_field" className="body-sm text-dark-grey">{labelText}</label>
            )}
            <div
                className={`text-field-container text-field-container-styles focus-within:text-field-container-styles-active ${error ? "text-field-container-styles-error" : ''}`}
                onClick={() => inputRef.current?.focus()}>
                {icon && (
                    <span>{icon}</span>
                )}

                <input id="text_field" className="body-md text-field-input" type="text" ref={inputRef} {...rest} />
                {error && (
                    <span className="body-sm ml-auto">{errorMessage}</span>
                )}
            </div>
        </div>
    )
}
