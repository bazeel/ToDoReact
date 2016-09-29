import React from 'react';
import { Button } from 'react-bootstrap';

class EditButton extends React.Component {
    render() {
        return (
            <Button
                bsStyle="primary"
                bsSize="xsmall"
                onClick={this.props.onClick}
            >Edit</Button>
        )
    }
}

EditButton.propTypes = {
    onClick: React.PropTypes.func
};

export default EditButton
