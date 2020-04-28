import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class Signup extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.signUp(this.state); //aama props etle use karyu chhe bcz mapStateTopProps or mapDispatchTopProps call thase etle ee props ma eeni value call thase.
		//jyare aa line lakhsu etle Dispatch ma signUp function call thase and ee function ma aa component ni value state onject ma chhe etle state object signUp(object) pass thase and authaction ma jase and signUp call thase eema logic call thai ne authreducer call thase and state update thase.
	};

	render() {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Sign Up</h5>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
						<div className="red-text center">
							{authError ? <p> {authError} </p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: newUser => dispatch(signUp(newUser))   //authAction ma signUp method ma newUser pass thase 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
