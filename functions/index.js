const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//for deploy function :::==>firebase deploy --only functions
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const createNotification = (notification =>{
    return admin.firestore()
                .collection('notifications')
                .add(notification)
                .then(doc=>console.log('notification added',doc));
})

exports.projectCreated = functions.firestore
                                .document('projects/{projectId}') //aama projects collection ma specific project id create thai hoy eemate use karyu chhe.
                                .onCreate(doc=>{

                                        const project=doc.data();
                                        const notifications = {
                                            content: 'Added a new project',
                                            users: `${project.authorFirstName} ${project.authorLastName}`,
                                            time: admin.firestore.FieldValue.serverTimestamp()
                                       
                                        }

                                        return createNotification(notification)
                                });

exports.userJoined = functions.auth.user().onCreate(user=>{

        return admin.firestore().collection('users').doc(user.uid).get().then(doc=>{

         const newUser = doc.data();
             const notification = {
                content: 'Joined HealtHub WebSite',
                user: `${newUser.firstName} ${newUser.lastName}`,
               time: admin.firestore.FieldValue.serverTimestamp()
            }

             return createNotification(notification)
        })
})