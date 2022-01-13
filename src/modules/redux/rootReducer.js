import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '@modules/redux/login/loginSlice';
import { modalReducer } from '@modules/redux/modal/modalSlice';

const rootReducer = combineReducers({
	login: loginReducer,
	modal: modalReducer,
});

export default rootReducer;
