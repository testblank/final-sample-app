import store from '@modules/redux/configureStore'
import { loginActions } from '@modules/redux/login/loginSlice';

const webviewLogin = () => {
    const dummy = { userId: 'test', userName: '홍길동' };

    store.dispatch(loginActions.loginSuccess(dummy));
}

const webviewBridge = {
    webviewLogin
}

export default webviewBridge;