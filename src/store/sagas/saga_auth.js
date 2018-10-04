import { takeEvery, put, call } from 'redux-saga/effects';
import { loginAPI, registerAPI } from '../api/api_firestore';

function* login(action) {
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

function* register(action){
    try {
        console.log('register', action);
        yield call(registerAPI, action.email, action.password);
        console.log('done');
        yield put({ type: 'REGISTER_SUCCESS' });
    } catch (e) {
        console.log(e);
        yield put({ type: 'REGISTER_FAIL', error: e });
    }
}

export default function* loginSaga() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('REGISTER', register);
}