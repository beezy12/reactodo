import React, { Component } from 'react';

class App extends Component {

  state = {
    newTodo: '',
    todoArray: []
  };
  

 addTodo = (event) => {
   event.preventDefault()

   this.setState({ 
     todoArray: [...this.state.todoArray, {
       title: this.state.newTodo,
       done: false
     }]
   });
 }

  newTodoChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.addTodo(event)}>
          <label>
            <input type="text" value={this.state.todoArray.title} onChange={(event) => this.newTodoChange(event)} />
          </label>
          <button>add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
