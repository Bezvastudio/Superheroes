import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
        return (
            <>
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#navbar">Back to top</a>
                </p>
                <p className="mb-0">Created by Martin Svoboda <a href="https://www.bezvastudio.cz">Bezva studio</a>.</p>
            </div>
            </>
        );
}