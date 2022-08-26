import React from 'react';
import Links from '../Links/Links';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Links to="/Home">Home</Links>
                <Links to="/reviews">Reviews</Links>
                <Links to="/dashboard">Dashboard</Links>
                <Links to="/blogs">Blogs</Links>
                <Links to="/about">About</Links>
            </nav>
        </div>
    );
};

export default Header;