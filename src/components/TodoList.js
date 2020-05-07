// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todos.map(task => (
                <Todo 
                    toggleComplete={props.toggleComplete}
                    key={task.id}
                    task={task}
                    //toggComplete={this.toggleComplete}
                />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;