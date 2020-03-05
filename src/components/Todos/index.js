import React from "react";
import { Box, List, ListItem, ListItemText, Divider, Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
function Todos(props) {
	let list =
		props.todos.length > 0 ? (
			<Box width={1000} mx="auto">
				<List component="nav" aria-label="mailbox folders">
					{props.todos.map(todo => {
						return (
							<Box bgcolor="white" key={todo.id} my={0.5}>
								<ListItem>
									<ListItemText primary={todo.content} />
									<Fab
										size="small"
										color="secondary"
										onClick={() => props.delete(todo.id)}
										aria-label="delete"
									>
										<DeleteIcon />
									</Fab>
								</ListItem>
								<Divider />
							</Box>
						);
					})}
				</List>
			</Box>
		) : (
			<p>Dont Have List</p>
		);

	return (
		<Box width={1000} mx="auto">
			{list}
		</Box>
	);
}

export default Todos;
