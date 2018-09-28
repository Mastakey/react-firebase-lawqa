import { fork, all } from 'redux-saga/effects';
import QuestionSaga from './saga_questions';

export default function *sagas() {
    yield all([
        fork(QuestionSaga),
    ]);
}