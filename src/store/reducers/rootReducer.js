import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; //data store and sync mate use thase.
import { firebaseReducer } from "react-redux-firebase"; //authenctication mate 

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, //firestore ma data update karva sync karva aa reducer use karsu..aava aapde reducer ne kesu ke kya data sync karvana chhe..
  firebase: firebaseReducer //Authetication mate use thase
});

export default rootReducer;

// the key name will be the data property on the state object
