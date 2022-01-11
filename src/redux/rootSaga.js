import { all, fork } from 'redux-saga/effects';
import { watchLoginSaga, watchLogoutSaga } from '@redux/login/loginSaga';

export default function* rootSaga() {
	yield all([fork(watchLoginSaga), fork(watchLogoutSaga)]);
}
