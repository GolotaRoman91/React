import './App.css';
import React from 'react';
import axios from 'axios';
import Form from './Components/Form';
import List from './Components/List';
import { apiUrl, TODOS_LIMIT } from './Constants/URL';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    this.queryTodo();
  }

  queryTodo = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}?_limit=${TODOS_LIMIT}`);
        this.setState({ todos: data });
    } catch (error) {
        return false;
    }
}

  addTodo = async (todo) => {
    try {
        const body = { todo, id: Date.now(), completed: false };
        await axios.post(apiUrl, body);
        this.setState({ todos: [...this.state.todos, todo] });
    } catch (error) {
        return false;
    }
  }

  deleteTodo = async (id) => {
    try {
        await axios.delete(`${apiUrl}/${id}`);
        this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
    } catch (error) {
        return false;
  }
  
}

toggleTodo = (id) => {
  this.setState({ todos: this.state.todos.map(item => (item.id === id ? {...item, completed: !item.completed} : item)) });
}

render() {
    return (
      <div className='App'>
        <Form addTodo={this.addTodo}/>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo}/>
      </div>
    )
  }
}

export default App;
