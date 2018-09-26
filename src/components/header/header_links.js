import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
    );
}

export default HeaderLinks;