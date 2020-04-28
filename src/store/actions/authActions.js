export const signin = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password) //if correct etle LOGIN_SUCCESS action dispatch thase  //action authReducer ma hase.
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });  //LOGIN_SUCCESS action call thase.je authReducer ma jase
			})
			.catch(err => {
				dispatch({ type: "LOGIN_ERROR", err }); //LOGIN_ERROR action call thase.je authReducer ma jase
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();  

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGNOUT_SUCCESS" });  //SIGNOUT_SUCCESS action call thase.je authReducer ma jase
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(res => {
				return firestore
					.collection("users")
					.doc(res.user.uid)   //upper je user ni new id bane chhe ee id j rakhi ne users collection ma je id use thase ee banne same hase .
					.set({   //upper na doc ma property set karva mate set use thase.
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0]    //Saurabh{S} + Khunt{K} = SK
					});
			})
			.then(() => {
				dispatch({ type: "SIGNUP_SUCCESS" });  //SIGNUP_SUCCESS action call thase. je authReducer ma jase
			})
			.catch(err => {
				dispatch({ type: "SIGNUP_ERROR", err });//SIGNUP_ERROR  action call thase.je authReducer ma jase
			});
	};
};
