import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({ newTodo: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        if(this.state.newTodo) {
            this.props.addTask(this.state.newTodo)
        }
        this.setState( {newTodo: ""} )

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="todo"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                </label>
                <button>Add</button>
            </form>
        )
    }



}
export default TodoForm;