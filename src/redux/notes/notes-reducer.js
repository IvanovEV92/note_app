import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { notesActions } from '.';
import { findAllByDisplayValue } from '@testing-library/react';

const notes = createReducer([], {
	[notesActions.fetchNotesSuccess]: (_, { payload }) => payload,
	[notesActions.addNotesSuccess]: (state, { payload }) => [...state, payload],
	[notesActions.updateNotesSuccess]: (state, { payload }) =>
		state.map(item => (item.id === payload.id ? { ...payload } : item)),
	// [productActions.removeProductSuccess]: (state, { _, payload }) =>
	// 	state.filter(({ id }) => id !== payload),
});

const changeNote = createReducer([], {
	[notesActions.fetchNotesByIdSuccess]: (_, { payload }) => payload,
});

const showEditForm = createReducer(false, {
	[notesActions.showEditForm]: () => true,
});

export default combineReducers({
	notes,
	changeNote,
	showEditForm,
});
