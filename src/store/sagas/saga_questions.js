import { takeEvery } from 'redux-saga/effects';

function* getQuestions(action){
    try {
        console.log(action);
    } catch (e) {
        console.log(e);
    }
}

export default function* questionSaga() {
    yield takeEvery('GET_QUESTIONS', getQuestions);
}