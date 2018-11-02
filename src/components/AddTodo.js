import React, { Component } from 'react'

export class AddTodo extends Component {
  constructor(props){
      super(props);
      this.state = {value:"example 1"};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event){
event.preventDefault();
console.log(this.state);
this.props.onSave(this.state.value);
  console.log("save task", this.state.value);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSave(this.state.value);
  console.log("save task", this.state.value);

  }
  handleChange(event){
    event.preventDefault();
    //console.log(mine.state.value);
    console.log(event.target);
    this.setState({value: event.target.value});
  }

    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} type="text"/>
        <button type="submit">add</button>
      </form>
    )
  }
}

export default AddTodo
