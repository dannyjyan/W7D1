import React from 'react';
import {uniqueId} from "../../util/unique_id"

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  titleChange(event){
    this.setState({title: event.currentTarget.value});
  }
  bodyChange(event){
    this.setState({body: event.currentTarget.value});
  }

  render() {
    return (
      <form id="todo-form">
        <input id="form-title" onChange={this.titleChange} value={this.state.title}></input>
        <br></br>
        <input id="form-body" onChange={this.bodyChange} value={this.state.body}></input>
        <br></br>
        <button onClick={this.submitTodo}>Submit</button>
      </form>
    );
  }
  submitTodo(e){
    e.preventDefault();
    const newTodo = {id: uniqueId(), title: this.state.title, body: this.state.body};
    console.log(this.props.receiveTodo);
    this.props.receiveTodo(newTodo);
    this.setState({ title: "", body: "" });
  }
}

export default TodoForm;