import React, { Component } from 'react';

import './TodoForm.css';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsibility: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsibility: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target; // destructuring
        console.log(value, name); // check the value and name
        this.setState({ // set the state
            [name]: value // computed property names
        });
    }

    render() {
        return (
            <div className="card">
                <div className='card-header'>
                    <h3 className='card-title'>
                        ✍🏼Add New Task
                    </h3>
                </div>
                <form className="card-body form-control" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            name="responsibility"
                            className="form-control"
                            value={this.state.responsibility}
                            onChange={this.handleInputChange}
                            placeholder="Responsibility"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <select
                            name="priority"
                            className="form-select"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
