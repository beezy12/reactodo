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
       title: this.state.newTodo.trim(),
       done: false
     }],
     newTodo: '' // clears form
   });
 }

  newTodoChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  removeTodo = (taskToDelete) => {
    // console.log('to delete: ', taskToDelete)
    const newTodoArray = [...this.state.todoArray]
    //newTodoArray.map(task => console.log('task to filter right here', task.title))
    this.setState({ todoArray: newTodoArray.filter(task => task.title !== taskToDelete) })
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
                <li key={index}>{task.title}</li>
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
