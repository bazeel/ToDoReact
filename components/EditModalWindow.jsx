import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, ButtonToolbar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import AddButton from './AddButton.jsx';
import EditButton from './EditButton.jsx';

class EditModalWindow extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {showModal: false};
        //binding right scope ( or can do it in render() )
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.saveButHandler = this.saveButHandler.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    saveButHandler() {
        let task = {
            title: ReactDOM.findDOMNode(this.refs.taskTitle).value,
            content: ReactDOM.findDOMNode(this.refs.taskContent).value,
            id: this.props.taskKey,
            done: this.props.taskDone
        }

        this.props.saveHandler(task);
        this.close();
    }
    render() {
        let btn = (this.props.isEditButton)
            ? <EditButton onClick={this.open}/>
            : <AddButton onClick={this.open}/>;
        return (
            <div>
                {btn}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            defaultValue={this.props.taskTitle}
                            ref="taskTitle"
                        />

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Content</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                ref="taskContent"
                                defaultValue={this.props.taskContent}/>
                        </FormGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.saveButHandler} bsStyle="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

EditModalWindow.defaultProps = {
    title: 'Add new task',
    isEditButton: false,
    taskTitle: '',
    taskContent: '',
    taskDone: false,
    taskKey: -1
};

EditModalWindow.propTypes = {
    title: React.PropTypes.string,
    isEditButton: React.PropTypes.bool,
    taskTitle: React.PropTypes.string,
    taskContent: React.PropTypes.string,
    taskDone: React.PropTypes.bool,
    taskKey: React.PropTypes.number,
    saveHandler: React.PropTypes.func
};

export default EditModalWindow
