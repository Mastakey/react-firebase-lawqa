import { takeEvery, put, call } from 'redux-saga/effects';
import { getQuestionsAPI, addQuestionAPI } from '../api/api_firestore';

function* getQuestionsSaga(){
    try {
        const dbResults = yield call(getQuestionsAPI);
        console.log("API results", dbResults);
        yield put({ type: 'GET_QUESTIONS_SUCCESS', payload: dbResults });
    } catch (e) {
        console.log(e);
        yield put({type:'GET_QUESTIONS_FAIL', e});
    }
}

function* addQuestion(action){
    try {
        console.log('add', action);
        yield call(addQuestionAPI, action.title, action.details);
        console.log('done');
        yield put({ type: 'ADD_QUESTION_SUCCESS'});
    } catch (e) {
        console.log(e);
        yield put({ type: 'ADD_QUESTION_FAIL', e });
    }
}

export default function* questionSaga() {
    yield takeEvery('GET_QUESTIONS', getQuestionsSaga);
    yield takeEvery('ADD_QUESTION', addQuestion);
}