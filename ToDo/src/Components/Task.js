import React from "react";

class Task extends React.Component {

    deleteTodo = () => {
        this.props.deleteTodo(this.props.todo.id)
    }

    toggleTodo = () => {
        this.props.toggleTodo(this.props.todo.id)
    }

    render() {
        // console.log(this.props.todo.completed)
        return (
            <div>
                <input type="checkbox" checked = {this.props.todo.completed} onChange={this.toggleTodo}/>
                <li className={this.props.todo.completed ? "done" : "inProgress"}> {this.props.todo.title}</li>
                <input type="button" value="Delete task" className="delete" onClick={this.deleteTodo}/> 
            </div>
        )        
    }
}

export default Task;