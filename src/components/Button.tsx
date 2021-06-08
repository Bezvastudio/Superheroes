import React from 'react'

interface ButtonProps {
    styling: string;
    label: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({styling, label, onClick}) => {
        return (
            <>

            <button onClick={onClick} className={
                styling === 'primary' ? 'text-white uppercase rounded-md px-4 py-2 m-1 bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline transition duration-500 ease'
                : styling === 'detail' ? 'text-gray-600 uppercase rounded-md px-2 py-1 mr-1 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 focus:shadow-outline transition duration-500 ease'
                : 'text-black uppercase rounded-md px-4 py-2 m-1 bg-gray-100 hover:bg-gray-200 focus:shadow-outline transition duration-500 ease'
            } >{label}</button>
            </>
        );
}