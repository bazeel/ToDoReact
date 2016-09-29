import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

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
                        <Button  bsStyle="success">Add task</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default TopNav
