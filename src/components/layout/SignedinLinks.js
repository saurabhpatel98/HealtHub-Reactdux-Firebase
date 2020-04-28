import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"; //SignedinLinks ne store sathe connect karva
import { signOut } from "../../store/actions/authActions";  //signout jyare user per klick kare tyare action call karava

const SignedinLinks = props => {
	// props.signOut()
	console.log("SignedinLinks Component Props ");
	console.log(props);
	return (
		<ul className="right">
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<NavLink to="/signin" onClick={props.signOut}>Log out</NavLink>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating pink lighten-1">
					{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = dispatch => {// aa Component ma signout method as a props pass karse.
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(null, mapDispatchToProps)(SignedinLinks);
