import React from 'react';
import {Panel, Button, ButtonToolbar} from 'react-bootstrap';
import EditModalWindow from './EditModalWindow.jsx';

class SingleTask extends React.Component {

    constructor(props) {
        super(props);
        //binding right scope ( or can do it in render() )
        this.deleteButHandler = this.deleteButHandler.bind(this);
        this.doneButHandler = this.doneButHandler.bind(this);
    }

    deleteButHandler() {
        this.props.deleteHandler(this.props.taskKey)
    }

    doneButHandler() {
        this.props.doneHandler(this.props.taskKey, this.props.taskDone)
    }

    render() {
        return (
            <Panel header={this.props.title} key={this.props.key}>
            <p>{this.props.content}</p>
                <ButtonToolbar>
                    <EditModalWindow
                        isEditButton={true}
                        taskKey={this.props.taskKey}
                        taskTitle={this.props.title}
                        taskContent={this.props.content}
                        taskDone={this.props.done}
                        saveHandler={this.props.saveHandler}
                    />
                    <Button bsStyle="primary" onClick={this.doneButHandler} bsSize="xsmall">Done</Button>
                    <Button bsSize="xsmall" onClick={this.deleteButHandler}>Delete</Button>
                </ButtonToolbar>
            </Panel>
        )
    }
}

SingleTask.defaultProps = {
    key: -1,
    title: 'Panel title',
    content: 'Panel content',
    done: false,
};
SingleTask.propTypes = {
    key: React.PropTypes.number,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    done: React.PropTypes.bool,
    saveHandler: React.PropTypes.func,
    deleteHandler: React.PropTypes.func,
    doneHandler: React.PropTypes.func
};

export default SingleTask
