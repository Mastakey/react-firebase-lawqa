import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLinks from './header_links';

const Header = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">LawQA</Link>
                <HeaderLinks />
            </div>
        </nav>
    );
}

export default Header;