import React from 'react'

interface SearchFormProps {
    placeholder: string;
    onChange: (event: any) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({placeholder, onChange}) => {
    return (
        <>
            <div className="relative mx-auto lg:w-96 mb-10">
                <input id="search" type="text" placeholder={placeholder}
                    className="mx-auto bg-transparent border rounded-md w-full focus-within:ring focus-within:border-teal-500 py-2 pl-10 pr-2 m-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:placeholder-transparent "
                    onChange={onChange} 
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                    
            </div>
        </>
    );
}