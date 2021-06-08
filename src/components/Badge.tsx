import React from 'react'

interface BadgeProps {
    value: string;
    color: string;
}

export const Badge: React.FC<BadgeProps> = ({value, color}) => {
        return (
            <>
            <span className={"inline-block text-white text-sm py-1 px-2 rounded-sm mr-1 mt-1 " + color}>{value}</span>
            </>
        );
}