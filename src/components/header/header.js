import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderLinks from './header_links';

class Header extends Component {
    render(){
        console.log('header', this.props);
        return (
            <nav className="nav-wrapper header blackheader">
                <div className="container">
                    <Link to='/' className="brand-logo">LawQA</Link>
                    <HeaderLinks isAuthenticated={this.props.isAuthenticated} />
                </div>
            </nav>
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
