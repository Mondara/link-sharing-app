import React from 'react'

interface Props {
    text: string
    icon: JSX.Element;

}

export const Tab: React.FC<Props> = ({ text, icon }) => {
    return (
        <button className="tab-layout tab-styles hover:tab-hover active:tab-active" >
            {icon}
            <span className="tab-text">{text}</span>
        </button>
    )
}
