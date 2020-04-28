import React, { Component } from "react";
import { connect } from "react-redux"; //redux sathe Signin component ne connect karva
import { signin } from "../../store/actions/authActions";   
import { Redirect } from "react-router-dom";
class Signin extends Component {
	state = {
		email: "",
		password: ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.signin(this.state);  //signin reducer ma signin()call thase and eema aa component ma je state chhe ee pass thase.
	};

	render() {
		console.log("{Signin Component }{render=Props} props ");
		console.log();
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Sign In</h5>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Login</button>
						<div className="red-text center">
							{authError ? <p>{authError}</p> : null} 
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {   //signin reducer ma je authError je ee aa component ma use karva mate aapde mapStateProps no use thase.
	//aama aapde signin ma je initial state chhe eeno call kari ne aapde state ma je properties chhe ee call karavsu.
	
	return {
		authError: state.auth.authError,  //aa Signin component ma as a props assign thase.
		auth: state.firebase.auth         // //aa Signin component ma as a props assign thase.
	};
};

const mapDispatchToProps = dispatch => {  //aa component na props sathe signin method attach karvamate use thai. //signin method use kari saksu
	return {
		signin: creds => dispatch(signin(creds)) /// signin reducer ma creds pass sathe ee signin reducer ma credentials name ni argument chhe tya jase.
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
