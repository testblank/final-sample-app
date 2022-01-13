import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '@redux/login/loginSlice';
import { modalReducer } from '@redux/modal/modalSlice';

const rootReducer = combineReducers({
	login: loginReducer,
	modal: modalReducer,
});

export default rootReducer;
