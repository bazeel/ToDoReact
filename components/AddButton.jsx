import React from 'react';
import { Button } from 'react-bootstrap';

class AddButton extends React.Component {
    render() {
        return (
            <Button  bsStyle="success"
                     bsSize="large"
                     onClick={this.props.onClick}
                     style={{ marginBottom: "20px"}}
            >
                Add task
            </Button>
        )
    }
}

AddButton.propTypes = {
    onClick: React.PropTypes.func
};

export default AddButton
