import React, { Component } from "react";
import "./App.css";
import { Container, Typography, Box } from "@material-ui/core";
import { AddTodos, Todos } from "./components";

class App extends Component {
	state = {
		todos: [
			{id: 1 , content: "Buy Milk"},
			{id: 2 , content: "Buy Sugar"},
		]
	}
	deleteTodos = (index) => {
		let todos = this.state.todos.filter(todo => {
			return todo.id !== index;
		})
		this.setState({
			todos: todos
		})
		console.log(todos)
	}
	addTodo = (todo) => {
		todo.id = Math.floor(Math.random()*10)
		let todos = [...this.state.todos, todo]
		// todo.id = Math.floor(Math.random()*10)
		console.log(todos)
		this.setState({
			todos: todos
		})
	}
	// deleteTodos(index) {
	// 	// let todos = this.state.todos.filter(todo => {
	// 	// 	return todo.id !== index
	// 	// })
	// 	// let todos = [...this.state.todos];
	// 	// todos.splice(index,1);

	// 	console.log(index)
	// 	// this.setState({
	// 	// 	todos: todos
	// 	// })
	// 	// console.log(index)
	// }
	render() {
		return (
			<Container className="App" bgcolor="error.main">
				<Box bgcolor="#eceff1" my={2}>
					<Typography variant="h3" align="center">
						<Box color="primary.main" py={0.5}>
							Todo App
						</Box>
					</Typography>
					<AddTodos submit={this.addTodo}></AddTodos>
					<Todos todos={this.state.todos} delete={this.deleteTodos}></Todos>
				</Box>
			</Container>
		);
	}
}

export default App;
