import React from 'react';
import SingleTask from './SingleTask.jsx';
import EditModalWindow from './EditModalWindow.jsx';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = JSON.parse(localStorage.getItem('state')) || {todos:[]};
        //binding right scope
        this.saveHandler = this.saveHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.doneHandler = this.doneHandler.bind(this);
    }
    doneHandler(idDone, isDone) {
        let indexDone = this.findIndexById(idDone);
        let todos = this.state.todos;
        todos[indexDone].done = !isDone;
        this.setStateWrap(todos, false);
    }
    deleteHandler(idTodelete) {
        let indexToDelete = this.findIndexById(idTodelete);
        let todos = this.state.todos;
        todos.splice(indexToDelete, 1);
        this.setStateWrap(todos);
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

    setStateWrap(todos ,sort=true) {
        //sorted in reverse order by task title
        if (todos.length > 1 && sort) {
            todos.sort(function(a, b) {
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                // names must be equal
                return 0;
            });
        }

        let newState = { todos };
        this.syncLocalStorage(newState);
        this.setState(newState);
    }
    syncLocalStorage(state) {
        localStorage.setItem('state', JSON.stringify(state));
    }
    render() {
        return (
            <div>
                <EditModalWindow saveHandler={this.saveHandler}/>
                {
                    this.state.todos.map(function(todo) {
                        return (
                            <div className={(todo.done) ? "done-task" : ""} key={todo.id}>
                                    <SingleTask
                                            taskKey={todo.id}
                                            title={todo.title}
                                            content={todo.content}
                                            saveHandler={this.saveHandler}
                                            deleteHandler={this.deleteHandler}
                                            doneHandler={this.doneHandler}
                                            />
                            </div>
                        )

                    }.bind(this))
                }
            </div>
        )
    }
}

export default TaskList
