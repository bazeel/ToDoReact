import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Nav, PageHeader, Panel, Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">ToDoApp</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem pullRight>
                            <Button  bsStyle="success">Add task</Button>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Panel header="Panel heading without title">
                    <p>Panel content</p>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="xsmall">Edit</Button>
                        <Button bsStyle="primary" bsSize="xsmall">Done</Button>
                        <Button bsSize="xsmall">Delete</Button>
                    </ButtonToolbar>
                </Panel>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));