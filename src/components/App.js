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
    const todoArray = [...this.state.todoArray]
    console.log(todoArray[index])
    const newOne = Object.assign({}, todoArray[index], {
      done: true
    })
    console.log(newOne)
    //this.setState({ todoArray: newOne})
    this.setState(prevState => ({ todoArray: prevState.todoArray.concat(newOne) }))
    // this.setState(prevState => ({ todos: prevState.todos.concat(thing) }));


/*
“  // Inside `ProductList`
  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }”

Excerpt From: Anthony Accomazzo, Ari Lerner, David Guttman, Nate Murray, Clay Allsopp and Tyler McGinnis. “Fullstack React.” Apple Books.
*/



    // this gets the right state object back ****************************************
    //this.setState(prevState => console.log(prevState.todoArray[index]))

    // DOES NOT WORK
    //this.setState(prevState => ({ prevState.todoArray[index].done: !this.state.done }))


// CURRENT TRY
    //const todoArray = [...this.state.todoArray]
    //console.log(!todoArray[index].done)
    //this.setState(prevState => ({ done: !prevState.todoArray[index].done }))




    //this.setState(todoArray[index] => ({ done: !this.state.done }))

    // THIS DOES NOT WORK. throws an error on the array destructuring ...
    // const todoArray = [...this.state.todoArray]
    // //console.log(todoArray[index])
    // todoArray[index] = {
    //   ...todoArray[index],
    //   done: true
    // }

    //this.setState({ todoArray })




/*
this.setState({
  ...this.state,
  metawords: evt.target.value,
})
*/

    // ********* THIS IS CLOSE BUT JUST SETTING THE WHOLE THING TO 'done: true' and erasing the other attributes
    // const todoArray = [...this.state.todoArray]; // copy the array
    // todoArray[index] = {
    //   ...todoArray[index]
    //   done: true // update done property on copied todo
    // }; // copy the todo can also use Object.assign
    // this.setState({
    //   todoArray
    // });
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
