import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import "./components/Todo.css";

const todos = [
  {
    task: 'Organize Desk',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'watch videos befor class',
    id: 723,
    completed: false
  },
  {
    task: 'do home work',
    id: 254,
    completed: false
  }

]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  } 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleComplete = taskId => {
    console.log("bk: index.js: App: toggleComplete: taskId ", taskId);
    this.setState({
      todos: this.state.todos.map(task => {
        if(taskId === task.id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    })
  }

  addTask = taskName => {
    console.log("bk: index.js: App: addTask: taskName: ", taskName)
    this.setState({
      todos: [
        ...this.state.todos,
        { task: taskName, complete: false, id: Date.now() }
      ]
    })
  }

  clearCompleted = () => {
    console.log();
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.complete
      })
    })
  }


  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <ToDoList 
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;
