const initState = {
	authError: null
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOGIN_ERROR":
			console.log("login error");
			return {
				...state,                                //Current State =initState
				authError: "Login failed"
			};
		case "LOGIN_SUCCESS":
			console.log("login success");
			return {
				...state,								 //Current State =initState
				authError: null    //authError null kari nakhse etle login thai sake je object ni ek property chhe.
			};

		case "SIGNOUT_SUCCESS":
			console.log("signout success");
			return state;

		case "SUGNUP_SUCCESS":
			console.log("signup success");
			return {
				...state,							 //Current State =initState
				authError: null
			};
		case "SIGNUP_ERROR":
			console.log("signup error");
			return {
				...state,										 //Current State =initState
				authError: action.err.message
			};
		default:
			return state;
	}
};

export default authReducer;
