import React, { Component } from "react";
import Header from './components/Header';
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Apicall from "./utils/Apicall";


const SERVER_ADDRESS = 'http://localhost:3000/';
class App extends Component {
  constructor(props) {
    //let mine = this;
    super(props);
    this.state = {
      todos: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);

  }
  componentDidMount() {
    //let data;
    fetch(SERVER_ADDRESS + 'todos')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        var temp = [];
        temp = data.map((item) => ({ name: item.name, completed: item.completed }));
        this.setState({ todos: temp });
      })
      .catch(error => { console.log(error) });


    //console.log(t1);
    //this.setState({todos:t1});  
    //this.setState({ todos: t1 });
    //console.log(this.state.todos);
  }
  handleSave(x) {
    let tdX = this.state.todos;
    console.log(x);
    tdX.push({ name: x, completed: false });
    console.log("inside handle Save");
    this.setState({ todos: tdX });

    Apicall.postData(SERVER_ADDRESS + 'todos/', { id: this.state.todos.length, name: x, completed: false });
  }
  handleUpdate(idT, nameT, completedT) {
    let temp = this.state.todos.slice();
    temp[idT] = { name: nameT, completed: completedT };
    Apicall.putData(SERVER_ADDRESS + 'todos/' + (idT + 1), { name: nameT, completed: completedT });
    this.setState({ todos: temp });
    console.log("call put to api");
  }
  render() {
    //const todos = [{name:"hello 1", completed:true},{name:"hello 2", completed:false}];
    return (
      <div className="App">
        <Header />
        <div>
          <div>To Do List</div>
          <TodoList todos={this.state.todos} onUpdate={(idT, nameT, completedT) => this.handleUpdate(idT, nameT, completedT)} />
          <AddTodo onSave={x => this.handleSave(x)} />
        </div>
      </div>
    );
  }
}

export default App;
