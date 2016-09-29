import React from 'react';
import SingleTask from './SingleTask.jsx';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            todos: [
                {
                    id: 2,
                    title: 'test title',
                    content: 'test content',
                    done: true
                },{
                    id: 1,
                    title: 'test title 2',
                    content: 'test content 2',
                    done: false
                }
            ]
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.todos.map(function(todo) {
                        return <SingleTask key={todo.id} title={todo.title} content={todo.content}/>
                    }.bind(this))
                }
            </div>
        )
    }
}

export default TaskList
