import React from 'react'

interface SearchFormProps {

}

export const SearchForm: React.FC<SearchFormProps> = ({ }) => {
    return (
        <>
            <div className="mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 lg:w-96 focus-within:ring ring-primary focus-within:border-teal-500">
                <form action="/search" className="flex flex-wrap justify-between md:flex-row">
                    <input value="form" type="search" name="query" placeholder="Search" className="flex-1 p-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                    <button className="flex justify-center w-full p-2 m-1 text-white transition-colors duration-200 transform rounded-md bg-indigo-500 lg:w-auto hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    );
}