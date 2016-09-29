import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (

            <ButtonToolbar>
                <Button bsStyle="primary" bsSize="small">Small button</Button>
                <Button bsSize="small">Small button</Button>
            </ButtonToolbar>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));