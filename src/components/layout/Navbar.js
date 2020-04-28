import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import { connect } from "react-redux"; //firebase Reducer mathi user liged in chhe ke nai eee property mate  redux state sathe connect karse.
import './Navbar.css'
const Navbar = (props) => {

	console.log("{Navbar Component }{mapStateProps}=>props");
	console.log(props);
	const { auth, profile } = props;
	// console.log(auth);
	const links = auth.uid ? (<SignedinLinks profile={profile} />) : (<SignedoutLinks />); //jo uid present hse to SignedinLinks call thase. nait o SignedoutLinks call thase.
	return (
		<nav className="nav-wrapper #64b5f6 blue lighten-2">
			<div className="container">
				<img src="/logo/Healthub.png" width="200" height="auto" alt="logo" />
				<Link to="/" className="brand-logo">HealtHub</Link>

				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {  //using this mathod aapde auth data ne access kari sakiye chhiye as props component ma
	console.log("{Navbar Component }{mapStateProps}=>state");
	console.log(state);
	return {
		auth: state.firebase.auth,  //store mathi data fetch kari ne auth ma save thase and ee as a props component use karse.
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(Navbar);
