import React, { Component } from 'react';

class App extends Component {

  state = {
    newTodo: '',
    todoArray: [{
      title: 'placeholder',
      done: false
    }, {
      title: 'number two',
      done: false
    }]
  };
  

  addTodo = (event) => {
    event.preventDefault()
    this.setState({
      todoArray: [...this.state.todoArray, {
        title: this.state.newTodo.trim(),
        done: false
      }],
      newTodo: '' // clears form
    });
  }

  markDone = (index) => {
    
  }

  newTodoChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  removeTodo = (taskToDelete) => {
    const todoArrayCopy = [...this.state.todoArray]
    this.setState({ todoArray: todoArrayCopy.filter(task => task.title !== taskToDelete) });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <label>
            <input type="text" value={this.state.newTodo} onChange={(event) => this.newTodoChange(event)} />
          </label>
          <button>add todo</button>
        </form>
        <ul>
          {this.state.todoArray.map((task, index) => {
            return (
              <div>
                <li onClick={() => this.markDone(index)} key={index}>{task.title}</li>
                <button onClick={(event) => this.removeTodo(task.title)}>remove task</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
