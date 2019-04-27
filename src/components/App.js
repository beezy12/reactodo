import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        todo: '',
        done: false
      }],
      words: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit = (event) => {
   console.log(this.state.value)
   event.preventDefault()
 }

  handleChange(event) {
    this.setState({ words: event.target.value });
  }

  render() {
    console.log(this.state.words)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.words} onChange={this.handleChange} />
          </label>
          <button>add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
