import React, { Component } from "react";
import { TextField, Box, Container } from "@material-ui/core";
export class AddTodos extends Component {
    // state = {
    //     todos: 
    // }
    // handleChange(event) {
    //     this.setState({
    //         todos: event.target.value
    //     });
    // }
    // handleSubmit(event) {
    //     event.preventDefault();
        
    //     console.log(this.state.todos)
	// }
	state = {
		content: ''
	}
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state)
		this.props.submit(this.state)
		this.setState({
			content: ''
		})
	}
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		})
		
	}
	render() {
		return (
			<Container>
				<Box width={1000} mx="auto" onSubmit={this.handleSubmit}>
					<form noValidate autoComplete="off">
						<TextField
							id="standard-basic"
							label="Add Todos"
							fullWidth
							margin="normal"
							value= {this.state.content}
							onChange={this.handleChange}
						/>
					</form>
				</Box>
			</Container>
		);
	}
}

export default AddTodos;
