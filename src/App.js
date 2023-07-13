import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import todosData from './todos.json';

// components
import TodoForm from './components/TodoForm'

function getPriorityClass(priority) {
  switch (priority) {
    case 'High':
      return 'danger'; // Clase CSS para alta prioridad
    case 'Medium':
      return 'warning'; // Clase CSS para prioridad media
    case 'Low':
      return 'success'; // Clase CSS para baja prioridad
    default:
      return 'secondary'; // Clase CSS predeterminada para cualquier otra prioridad
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData.todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo = (index) => {
    if (window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => i !== index)
      });
    }
  }


  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todoItems = this.state.todos.map((todo, i) => {
      const priorityClass = getPriorityClass(todo.priority); // Obtén la clase CSS según la prioridad
      return (
        <div className='col-md-4' key={i}>
          <div className="card m-3">
            <div className='d-flex justify-content-start ms-2'>
              📌
            </div>
            <div className="card-title">
              <div className="d-flex justify-content-between mt-1 ms-4 me-2">
                <h3>
                  {todo.title}
                </h3>
                <div className=''>
                  <span className={`badge text-bg-${priorityClass} badge-pill`}>
                    {todo.priority}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className='d-flex justify-content-start'>📃Description:</h6>
              <p>{todo.description}</p>
              <h6 className='d-flex justify-content-start'>👨🏼Responsible:</h6>
              <p>{todo.responsibility}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger btn-sm m-2" onClick={this.removeTodo.bind(this, i)}>
                Delete 🗑️
              </button>
            </div>
          </div>
        </div>
      )
    }
    );

    // RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className='container-fluid'>
            <a href="" className="navbar-brand">
              <img src={logo} className="App-logo" alt="logo" />
              Task creator
            </a>
            <div className='d-flex'>
              <span className='badge text-bg-purple me-2'>
                {this.state.todos.length} tasks
              </span>
            </div>
          </div>

        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <h1 className='text-white'>👋🏼Welcome!</h1>
              <h2 className='text-white'>To task creator</h2>
              <hr />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todoItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
