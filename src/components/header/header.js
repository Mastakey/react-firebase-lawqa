import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderLinks from './header_links';

import {
    Navbar
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        console.log('header', this.props);
        return (
            <div className="header-content">
                <Navbar className="header-nav" color="dark" dark expand="md">
                    <NavLink className="navbar-brand" to="/">lawqa</NavLink>
                    <HeaderLinks isAuthenticated={this.props.isAuthenticated}/>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
