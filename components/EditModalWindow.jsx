import React from 'react';
import {Button, Modal, ButtonToolbar} from 'react-bootstrap';

class EditModalWindow extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {showModal: false};
        //binding right scope ( or can do it in render() )
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <div>
                <Button  bsStyle="success"
                    bsSize="large"
                    onClick={this.open}
                >
                    Add task
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default EditModalWindow
