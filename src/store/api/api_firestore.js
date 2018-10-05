import firebase, { firestore } from '../../config/config_firebase';

export function loginAPI(email, password){
    console.log('firebase: login: ' + email);;
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function registerAPI(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function getQuestionsAPI() {
    console.log("saga get questions");
    try {
        return firestore.collection("test_questions").orderBy("created", "desc").get();
    } catch (e) {
        console.log(e);
    }
}

export function addQuestionAPI(title, details) {
    try {
        firestore.collection("test_questions").add({
            title: title,
            details: details,
            created: new Date()
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    } catch (e) {
        console.log(e);
    }
}