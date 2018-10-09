import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        const LinksToShow = this.props.isAuthenticated ?
        <UserLinks /> : <LoginLinks />
        return (
            <Navbar color="primary-color no-shadow no-padding-height" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>LawQA</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                    </NavbarNav>

                    {LinksToShow}
                </Collapse>
            </Navbar>
        );
    }
}

const LoginLinks = () => {
    return (
        <NavbarNav right className="nav-right-center">
            <NavItem>
                <NavLink to="/questions"><button type="button" className="btn btn-deep-orange btn-rounded btn-sm">Questions</button></NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/login" className="nav-link-center active">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/register" className="nav-link-center active">Register</NavLink>
            </NavItem>
        </NavbarNav>
    );
}

const UserLinks = () => {
    return (
        <NavbarNav right className="nav-right-center">
            <NavItem>
                <NavLink to="/questions"><button type="button" className="btn btn-deep-orange btn-rounded btn-sm">Questions</button></NavLink>
            </NavItem>
            <NavItem>
                <Dropdown>
                    <DropdownToggle nav caret>Profile</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">Settings</DropdownItem>
                        <DropdownItem href="#">Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavItem>
        </NavbarNav>
    );
}