import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderLinks extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log("render HeaderLinks, auth: ", this.props.isAuthenticated);
        if (this.props.isAuthenticated) {
            return <UserLinks />;
        }
        return <LoginLinks />;
    }
}

const LoginLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
    );
}

const UserLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
    );
}

export default HeaderLinks;
