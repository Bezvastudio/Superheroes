import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
        return (
            <>
            <div className="w-full bg-gray-200 py-10">
                <div className="flex container mx-auto">
                    <div className="flex-auto ">
                        React, Typescrypt, Tailwind css
                    </div>
                    <div className="flex-auto text-center">
                        Frst react project of Martin Svoboda from <a href="https://www.bezvastudio.cz" target="_blank" rel="noreferrer">Bezva studio</a>
                    </div>
                    <div className="flex-auto text-right">
                    <a href="#" className={'text-white uppercase rounded-md px-4 py-2 m-1 bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline transition duration-500 ease'} >Back to top</a>
                    </div>
                </div>
            </div>
            </>
        );
}