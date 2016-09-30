import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class TopNav extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>To Do List ordered by title</h1>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem >

                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default TopNav
