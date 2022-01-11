import { call, put, takeLatest } from 'redux-saga/effects';
import { loginApi, logoutApi } from '@api/loginApi/loginApi';
import { loginActions } from '@redux/login/loginSlice';

function* loginSaga(action) {
    try {
        const res = yield call(loginApi);
        yield put(loginActions.loginSuccess(res.data[0]));
    } catch (error) {
        yield put(loginActions.loginFailure(error));
    }
}

function* logoutSaga(action) {
    try {
        const res = yield call(logoutApi);
        yield put(loginActions.logoutSuccess(res));
    } catch (error) {
        yield put(loginActions.logoutFailure(error));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(loginActions.loginRequest.type, loginSaga);
}

export function* watchLogoutSaga() {
    yield takeLatest(loginActions.logoutRequest.type, logoutSaga);
}


