import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { compose } from "redux"; //multiple higher order component ne combine karva mate
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"; //firebase na firestore mathi data fetch karva mate use thai firestoreConnect je firestoreReducer sathe connect thase.
import { Redirect } from "react-router-dom";  //jo user loged in hase to eene new project and signout j dekhai and login na hoy to eene new project na data na dekhai ee mate redirect karva signin component ma use kariyo.

export class Dashboard extends Component {
	render() {
		// console.log(this.props)

		const { projects, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="container dashboard">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("Reducers Object and it's property {Dashboard Component}");
	console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
		// projects: state.project.projects
	};
};

export default compose(
	connect(mapStateToProps),
	// firestoreConnect(['projects'])
	firestoreConnect([
		{ collection: "projects", orderBy: ["createdAt", "desc"] },           //aama aapde je collection na data jota hoy ee collection lakhavana and aapde other property joti hoy to orderdBy ee use karvanu
		{ collection: "notifications", limit: 3, orderBy: ["time", "desc"] }   //aama project ne time vise sort karva mate aapde orferBy no use thai eema time property  'desc' means in decending order .
	])
)(Dashboard);
