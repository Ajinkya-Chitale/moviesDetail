import React, { useContext } from 'react'
import { AppContext } from '../Context/context';

const MovieTypeDropdown = () => {
    const { type, setType } = useContext(AppContext);

    const dropdownMenu = document.getElementById('dropdown-menu');

    // Function to toggle the dropdown state
    function toggleDropdown() {
        dropdownMenu.classList.toggle('hidden');

        const allDropdownList = dropdownMenu.querySelectorAll('a');

        allDropdownList.forEach(item => {
            (type === (item.innerText).toLocaleLowerCase()) ? item.classList.add('active') : item.classList.remove('active');

            item.addEventListener('click', () => {
                setType(item.innerText);
                dropdownMenu.classList.add('hidden');
            })
        });
    }

    const handleToggle = () => {
        // JavaScript to toggle the dropdown
        toggleDropdown();
    }

    return (
        <div className="dropdownParent relative mx-auto h-full sm:max-w-xl md:max-w-full px-11 sm:px-12 md:px-32 lg:px-20 lg:max-w-screen-xl">
            <div className="flex items-center justify-end mb-6">
                <div className="relative group">
                    <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" onClick={handleToggle}>
                        <span className="mr-2">Select Type</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div id="dropdown-menu" className="hidden absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-50">
                        {/* Dropdown content goes here */}
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-500 hover:text-white hover:font-bold cursor-pointer rounded-md capitalize">movie</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-500 hover:text-white hover:font-bold cursor-pointer rounded-md capitalize">series</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-500 hover:text-white hover:font-bold cursor-pointer rounded-md capitalize">episode</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieTypeDropdown
