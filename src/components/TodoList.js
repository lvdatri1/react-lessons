import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
   this.handleUpdateTask = this.handleUpdateTask.bind(this);
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
  handleUpdateTask() {
    console.log("good afternoon");
    // let temp = this.state.todos.slice();
    // temp[1] = { name: "tao lao", completed: false };
    // this.setState({ todos: temp });
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
          updateTask={()=>this.handleUpdateTask()}
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
