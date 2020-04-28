// import { firestore } from '../../config/fbConfig'

export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database

		const firestore = getFirestore();
		const profile = getState().firebase.profile;  //getState no use kari ne aapde state object no use kari sakisu ==>Object.firebase.profile==>authorFirstName,authorLastName mali jase.
		const authorId = getState().firebase.auth.uid; //getState no use kari ne aapde state object no use kari sakisu ==>Object.firebase.auth.uid==>uid mate
		firestore
			.collection("projects")
			.add({
				...project,
				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorId: authorId,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: "CREATE_PROJECT", project });
			})
			.catch(err => {
				dispatch({ type: "CREATE_PROJECT_ERROR", err });
			});
		// dispatch({ type: "CREATE_PROJECT", project });
	};
};
