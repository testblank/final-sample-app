import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	popupState: false,
	sheetState: false,
	drawerState: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		popup: (state, action) => {
			state.popupState = action.payload;
		},
		sheet: (state, action) => {
			state.sheetState = action.payload;
		},
		drawer: (state, action) => {
			console.log('state', state);
			console.log('action', action);
			state.drawerState = action.payload;
		},
	},
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
