import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
	state = {
		title: "",
		content: ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.createProject(this.state);
		this.props.history.push("/");
	};

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;  //jyare use /create karse to direct data show karse etle direct data na dekhai eem karvu hoy to aapde condition ma josu jo ee user signin hase to content dekhase nai to nai dekhai.
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create Project</h5>

					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Project Content</label>
						<textarea
							id="content"
							className="materialize-textarea"
							onChange={this.handleChange}
						></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth  //user ne authenticate karva jo user login hase to j tamne data dekhase.
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createProject: project => dispatch(createProject(project))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
