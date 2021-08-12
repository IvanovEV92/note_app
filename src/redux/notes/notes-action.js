import { createAction } from '@reduxjs/toolkit';

const fetchNotesRequest = createAction('products/fetchNotesRequest');
const fetchNotesSuccess = createAction('products/fetchNotesSuccess');
const fetchNotesError = createAction('products/fetchNotesError');
const addNotesRequest = createAction('products/addNotesRequest');
const addNotesSuccess = createAction('products/addNotesSuccess');
const addNotesError = createAction('products/addNotesError');
const fetchNotesByIdRequest = createAction('products/fetchNotesByIdRequest');
const fetchNotesByIdSuccess = createAction('products/fetchNotesByIdSuccess');
const fetchNotesByIdError = createAction('products/fetchNotesByIdError');
const updateNotesRequest = createAction('products/updateNotesRequest');
const updateNotesSuccess = createAction('products/updateNotesSuccess');
const updateNotesError = createAction('products/updateNotesError');

const showEditForm = createAction('products/showEditForm');
const closeEditForm = createAction('products/closeEditForm');

const notesActions = {
	fetchNotesRequest,
	fetchNotesSuccess,
	fetchNotesError,
	addNotesRequest,
	addNotesSuccess,
	addNotesError,
	fetchNotesByIdRequest,
	fetchNotesByIdSuccess,
	fetchNotesByIdError,
	updateNotesRequest,
	updateNotesSuccess,
	updateNotesError,
	showEditForm,
	closeEditForm,
};
export default notesActions;
