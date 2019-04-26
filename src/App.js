import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [{
      todo: '',
      done: false
    }]
  }

  addTodo = () => {

  }

  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" name="thing" />
          </label>
          <button>add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
