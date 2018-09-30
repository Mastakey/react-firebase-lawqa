import { takeEvery, put, call, take } from 'redux-saga/effects';
import firebase from '../../config/firebase';

function* getQuestionsAPI(){
    console.log("saga get questions");
    try {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        return db.collection("test_questions").get();
    } catch (e) {
        console.log(e);
    }
}

function* getQuestionsWorker(){
    try {
        const dbResults = yield call(getQuestionsAPI);
        yield put({type:'GET_QUESTIONS_SUCCESS', payload: dbResults});
    } catch (e) {
        console.log(e);
        yield put({type:'GET_QUESTIONS_FAIL', e});
    }
}

function* addQuestion(action){
    try {
        console.log(action);
    } catch (e) {
        console.log(e);
    }
}

export default function* questionSaga() {
    yield takeEvery('GET_QUESTIONS', getQuestionsWorker);
    yield takeEvery('ADD_QUESTION', addQuestion);
}