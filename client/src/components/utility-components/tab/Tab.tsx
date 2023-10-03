import React from 'react'
import { NavLink } from 'react-router-dom';

interface Props {
    text: string
    icon: JSX.Element;
    page: string;

}

export const Tab: React.FC<Props> = ({ text, icon, page }) => {
    return (
        <NavLink id="tab" className={({ isActive }) =>
            isActive ? 'tab-active tab-layout tab-styles' : 'tab-layout tab-styles'
        }
            to={page} >
            {icon}
            <span className="heading-sm mobile:hidden">{text}</span>
        </NavLink>
    )
}
