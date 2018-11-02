import React, { Component } from "react";

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      completed: this.props.completed
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
       let x = !this.state.completed;
       this.setState({name: this.state.name, completed: x});
       console.log(this.props);
       this.props.updateTask(this.props.id, this.state.name, this.state.completed );
  }
  render() {
    let temp;
    if (!this.state.completed === true) {
      temp = this.state.name;
    } else {
      temp = <u> {this.state.name}</u>
           
    }
    return <li onClick={this.handleClick}>{temp}</li>
    
    
  }
}

export default Todo;
