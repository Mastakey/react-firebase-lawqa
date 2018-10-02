import firebase, { firestore } from '../../config/firebase';

export function loginAPI(email, password){
    console.log('firebase: login: ' + email);;
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function getQuestionsAPI() {
    console.log("saga get questions");
    try {
        return firestore.collection("test_questions").get();
    } catch (e) {
        console.log(e);
    }
}

export function addQuestionAPI(title, content) {
    try {
        firestore.collection("test_questions").add({
            title: title,
            content: content
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
