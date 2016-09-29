import React from 'react';
import {Panel, Button, ButtonToolbar} from 'react-bootstrap';

class SingleTask extends React.Component {

    render() {
        return (
            <Panel header={this.props.title} key={this.props.id}>
            <p>{this.props.content}</p>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="xsmall">Edit</Button>
                    <Button bsStyle="primary" bsSize="xsmall">Done</Button>
                    <Button bsSize="xsmall">Delete</Button>
                </ButtonToolbar>
            </Panel>
        )
    }
}

SingleTask.defaultProps = {
    id: 1,
    title: 'Panel title',
    content: 'Panel content'
};
SingleTask.propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    content: React.PropTypes.string
};

export default SingleTask
