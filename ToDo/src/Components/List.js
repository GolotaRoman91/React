import React from "react";
import Task from "./Task";

class List extends React.Component{
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => <Task key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo}/>)}
            </ul>
        )
    }
}

export default List;