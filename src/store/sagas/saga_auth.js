import { takeEvery, put, call } from 'redux-saga/effects';
import { loginAPI } from '../api/firestore';

function* login(action, email, password) {
    try {
        console.log('login', action);
        yield call(loginAPI, action.email, action.password);
        console.log('done');
        yield put({ type: 'LOGIN_SUCCESS' });
    } catch (e) {
        console.log(e);
        yield put({ type: 'LOGIN_FAIL', error: e });
    }
}

export default function* loginSaga() {
    yield takeEvery('LOGIN', login);
}