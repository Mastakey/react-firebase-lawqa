import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class HeaderLinks extends Component {
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
        console.log("render HeaderLinks, auth: ", this.props.isAuthenticated);
        const LinksToShow = this.props.isAuthenticated ?
            <UserLinks /> : <LoginLinks isOpen={this.state.isOpen}/>
        return (
            <div className="header-nav-right">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.props.isOpen} navbar>
                    {LinksToShow}
                </Collapse>
            </div>
        );
    }
}

const LoginLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link active" to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link active" to="/register">Register</NavLink>
                </NavItem>
        </Nav>
    );
}

const UserLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar className="active">
            <DropdownToggle nav caret>
                Profile
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem>
                    Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>
    );
}

export default HeaderLinks;
