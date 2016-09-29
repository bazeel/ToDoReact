import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './TopNav.jsx';
import TaskList from './TaskList.jsx';


class App extends React.Component {
    render() {
        return (
            <div>
                <TopNav/>
                <TaskList/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
