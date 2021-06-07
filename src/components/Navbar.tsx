import React from 'react'

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
            <>
            <div className="container">
                <p className="mb-0">Superheroes</p>
            </div>
            </>
        );
}