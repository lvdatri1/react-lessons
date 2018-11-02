import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidMount() {
    console.log("iniside did mount toolist:", this.props);
    //
  }
  componentWillMount() {
    console.log("iniside Will mount toolist:", this.props);
    //
  }
  componentWillReceiveProps(newProps){
    console.log("iniside will receive mount toolist:", newProps);
    this.setState({todos: newProps.todos});
  }
 
  componentDidUpdate() {
    console.log("iniside did update toolist:", this.props);
    // this.setState({todos: this.props.todos});
  }
  handleUpdateTask(keyT, nameT, completedT) {
    console.log("good afternoon");
    let temp = this.state.todos.slice();
    temp[keyT] = { name: nameT, completed: completedT };
    this.setState({ todos: temp });
  }

  render() {
    let x1 = this.state.todos;
    let temp = x1.map(function(x, index) {
      return (
        <Todo
          name={x.name}
          completed={x.completed}
          key={index}
          id={index}
          updateTask={(keyT, nameT, completedT) =>
            this.handleUpdateTask(keyT, nameT, completedT)
          }
        />
      );
    });

    return (
      <div>
        <ol>{temp}</ol>
      </div>
    );
  }
}

export default TodoList;
