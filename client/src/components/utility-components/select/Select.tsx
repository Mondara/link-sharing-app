import { useEffect, useState, useRef, FC, SelectHTMLAttributes } from 'react';

import { ReactComponent as DownArrow } from '../../../assets/images/icon-chevron-down.svg';
import { ReactComponent as UpArrow } from '../../../assets/images/icon-chevron-up.svg';

interface SelectOption {
    label: string;
    icon?: JSX.Element;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    defaultSelectedOption: SelectOption;
    callback: (selectOption: string) => void;

}

export const Select: FC<Props> = ({ options, defaultSelectedOption, callback }) => {
    const [selected, setSelected] = useState<SelectOption>(defaultSelectedOption);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onSelect = (option: SelectOption) => {
        setSelected(option)
        callback(option.label)
        setIsOpen(false);
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (!selectRef.current?.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    })

    return (
        <div className="relative" ref={selectRef}>
            <div
                className="dropdown-layout dropdown-style hover:dropdown-styles-active body-md w-full"
                onClick={toggleDropdown}
            >
                <div className="dropdown-option">
                    <span>{selected.icon}</span>
                    <span>{selected.label}</span>
                </div>
                {isOpen ? <UpArrow /> : <DownArrow />}

            </div>
            {isOpen && (
                <div className=" absolute z-10 dropdown-list-layout dropdown-list-styles w-full">
                    {options.map((option, idx) => (
                        <div key={option.label} onClick={() => onSelect(option)}
                            className="group w-full flex flex-col justify-start items-start gap-3">
                            <div className="dropdown-option group-hover:dropdown-list-styles-active">
                                {option.icon && <span>{option.icon}</span>}
                                {option.label}
                            </div>
                            {idx != options.length - 1 && (
                                <div className="dropdown-list-divider-layout dropdown-list-divider-styles" />
                            )}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

