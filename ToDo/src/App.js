import './App.css';
import React from 'react';
import axios from 'axios';
import Form from './Components/Form';
import List from './Components/List';
import { API_URL, todosLimit } from './Constants/URL';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    this.querytodo();
    console.log('State ' + this.state.todos)
  }

  querytodo = async () => {
    try {
        const { data } = await axios.get(`${API_URL}?_limit=${todosLimit}`);
        this.setState({ todos: data });
    } catch (error) {
        return false;
    }
}

  addTodo = async (todo) => {
    try {
        const body = { todo, id: Date.now(), completed: false };
        await axios.post(API_URL, body);
        this.setState({ todos: [...this.state.todos, todo] });
    } catch (error) {
        return false;
    }
  }

  deleteTodo = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
    } catch (error) {
        return false;
  }
  
}

toggleTodo = (id) => {
  this.setState({ todos: this.state.todos.map(item => (item.id === id ? {...item, completed: !item.completed} : item)) });
}

render() {
  console.log("Render State " + this.state.todos)
    return (
      <div className='App'>
        <Form addTodo={this.addTodo}/>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo}/>
      </div>
    )
  }
}

export default App;
