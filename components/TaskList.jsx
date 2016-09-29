import React from 'react';
import SingleTask from './SingleTask.jsx';
import EditModalWindow from './EditModalWindow.jsx';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            todos: [
            ]
        };
        //binding right scope
        this.saveHandler = this.saveHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    deleteHandler(idTodelete) {
        let indexToDelete = this.findIndexById(idTodelete);
        let todos = this.state.todos;
        let newTodos = todos.splice(indexToDelete, 1);
        this.setStateWrap(newTodos);
    }
    saveHandler(task={}) {
        if (!task || !task.content || !task.title ) {
            return;
        }
        if (task.id == -1) {
            this.addHandler(task);
        } else {
            this.editHandler(task);
        }
    }
    editHandler(task={}) {
        let indexToEdit = this.findIndexById(task.id);
        let todos = this.state.todos;
        todos[indexToEdit] = task;
        this.setStateWrap(todos);
    }
    findIndexById(id) {
        let  findByid = (t) => {
            return t.id == id;
        }
        let todos = this.state.todos;
        return todos.findIndex(findByid);
    }
    addHandler(task={}) {
        let newId = this.state.todos.length > 0 ? this.genNewId(this.state.todos) : 1;
        task.id = newId;
        let todos = [...this.state.todos, task];
        this.setStateWrap(todos);
    }
    genNewId(todos) {
        let newTodos = todos.sort(function (a, b) {
            return a.id - b.id
        });
        let newId = newTodos[newTodos.length - 1].id + 1;
        return newId;
    }

    setStateWrap(todos) {
        //ordering by title
        if (todos.length > 1) {
            todos.sort(function(a, b) {
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }

        let newState = { todos };
        this.syncLocalStorage(newState);
        this.setState(newState);
    }
    syncLocalStorage() {

    }
    render() {
        return (
            <div>
                <EditModalWindow saveHandler={this.saveHandler}/>
                {
                    this.state.todos.map(function(todo) {
                        return <SingleTask
                                    key={todo.id}
                                    taskKey={todo.id}
                                    title={todo.title}
                                    content={todo.content}
                                    saveHandler={this.saveHandler}
                                    deleteHandler={this.deleteHandler}/>
                    }.bind(this))
                }
            </div>
        )
    }
}

export default TaskList
