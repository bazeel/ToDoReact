import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import EditModalWindow from './EditModalWindow.jsx';

class TopNav extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>To Do List</h1>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem pullRight>
                        <EditModalWindow/>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default TopNav
