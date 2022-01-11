import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '@/redux/login/loginSlice';

const rootReducer = combineReducers({ 
    loginReducer 
});

export default rootReducer;
