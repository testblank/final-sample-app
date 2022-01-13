import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	popup: false,
	sheet: false,
	drawer: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		popup: (state, action) => {
			state.popup = action.payload;
		},
		sheet: (state, action) => {
			state.sheet = action.payload;
		},
		drawer: (state, action) => {
			state.drawer = action.payload;
		},
	},
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
