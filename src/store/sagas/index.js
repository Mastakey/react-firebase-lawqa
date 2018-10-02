import { fork, all } from 'redux-saga/effects';
import AuthSaga from './saga_auth';
import QuestionSaga from './saga_questions';


export default function *sagas() {
    yield all([
        fork(QuestionSaga),
        fork(AuthSaga)
    ]);
}