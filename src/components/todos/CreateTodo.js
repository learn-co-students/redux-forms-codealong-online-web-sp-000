import React from "react";
import { connect } from "react-redux";

class CreateTodo extends React.Component {

	state = {
		todo: ""
	}

	handleChange = (event) => {
		this.setState({
			todo: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch({type: "ADD_TODO", payload: this.state});
		this.setState({
			todo: ""
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>add todo </label>
						<input type="text"
									 value={this.state.todo}
									 onChange={this.handleChange} />
					</p>
					<input type="submit" />
				</form>
			</div>
		)
	}

}

export default connect()(CreateTodo)
