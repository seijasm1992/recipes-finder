import React from 'react';
import Nav from './nav';
const Header = () => {
    return (
        <header className='container mx-auto p-4 flex justify-between items-center justify-between font-nunitoSans text-2xl font-bold border-b border-[#E5E4E0] pb-8' >
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>
            <Nav />
            <div>
                <button className='bg-[#173A34] text-white px-4 py-2 rounded-md hidden md:block'>
                    Browse recipes
                </button>
            </div>

        </header>
    );
};

export default Header;