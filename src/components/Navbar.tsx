import React from 'react'

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
        return (
            <>
            <div className="w-full bg-gray-200 py-6">
                <div className="flex container mx-auto">
                    <div className="flex-auto ">
                        <div className="px-2 mr-1 text-white rounded-md bg-indigo-500 inline-block">
                            <span className="font-semibold text-2xl tracking-tight">S</span>
                        </div>
                        <span className="font-semibold text-xl tracking-tight">Superheroes</span>
                    </div>
                    <div className="flex-auto text-right">&nbsp;
                    </div>
                </div>
            </div>
            </>
        );
}