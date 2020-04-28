import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig, {  
			useFirestoreForProfile: true,//props ma firebase properties ma profile ma jaiye to is loaded:false etle aapde firestore na data ne access nai male.. a/aapde jyare Sk ni value chhe ee firestore ma chhe but aapde jyare firebase object ma probile ma jasu to false lakhelu hase have eene tru karva mate firebase ma aa property add karvi padse.
			userProfile: "users", //have aapde firebase ni isLiaded vali property true kari but kya collection na data load thava joiye ee nai kidhu etke aama aapde collection mention karsu.
			attachAuthIsReady: true
			//jo aapde aa upper ni 3 property na lakhiye to react app jyare run thai tyare ..user already login hoy to pn pela signin signup bip thase and pachhi fire base ma autheticate thase and pachhi logout new project tab batavse to eevu na thai ee mate aa property no use thase.
		})
	)
);

store.firebaseAuthIsReady.then(() => {//jo auth ready hase to aapdu App call thase ....aavu thase etle aapde pela je signup signin valu aavtu ee nikali jase.
	ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById("root")
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
});
