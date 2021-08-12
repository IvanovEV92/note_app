import { DBConfig } from '../../db/connect';
import { initDB, useIndexedDB } from 'react-indexed-db';
import date from '../../date';

import notesActions from './notes-action';

initDB(DBConfig);

const fetchNotes = id => async dispatch => {
	const { getAll } = useIndexedDB('notes');

	dispatch(notesActions.fetchNotesRequest());
	try {
		const result = await getAll().then(personFromDB => {
			return personFromDB;
		});
		dispatch(notesActions.fetchNotesSuccess(result));
	} catch (error) {
		dispatch(notesActions.fetchNotesError(error));
	}
};

const addNotes = () => async dispatch => {
	const { add } = useIndexedDB('notes');
	const currentDate = date();

	dispatch(notesActions.addNotesRequest());
	try {
		const newNote = { topic: 'Новая заметка', date: currentDate, edit: false };
		await add(newNote).then(
			event => {
				console.log('ID Generated: ', event);
				newNote.id = event; // !! тут к сожалению не смог нагуглить как вернуть в апи созданую заметку
			},
			error => {
				console.log(error);
			},
		);

		dispatch(notesActions.addNotesSuccess(newNote));
	} catch (error) {
		dispatch(notesActions.addNotesError(error));
	}
};

const fetchNotesById = id => async dispatch => {
	const { getByID } = useIndexedDB('notes');

	// dispatch(notesActions.closeEditForm());
	dispatch(notesActions.fetchNotesByIdRequest());
	try {
		const result = await getByID(id).then(personFromDB => {
			return personFromDB;
		});
		dispatch(notesActions.fetchNotesByIdSuccess(result));
	} catch (error) {
		dispatch(notesActions.fetchNotesByIdError(error));
	}
};

const updateNotes = (changeNotesId, noteTopic) => async dispatch => {
	const { update } = useIndexedDB('notes');
	const currentDate = date();

	dispatch(notesActions.updateNotesRequest());
	try {
		const newNote = {
			id: changeNotesId,
			topic: noteTopic,
			date: currentDate,
			edit: false,
		};
		console.log(newNote);
		await update(newNote).then(e => {
			return e;
		});
		dispatch(notesActions.updateNotesSuccess(newNote));
	} catch (error) {
		dispatch(notesActions.updateNotesError(error));
	}
};

// const removeProduct = contactId => async dispatch => {
// 	dispatch(actions.removeProductRequest());
// 	try {
// 		axios.delete(`/${contactId}`);
// 		dispatch(actions.removeProductSuccess(contactId));
// 	} catch (error) {
// 		dispatch(actions.removeProductError(error));
// 	}
// };

const productOperations = {
	fetchNotes,
	addNotes,
	fetchNotesById,
	updateNotes,
	// removeProduct,
};

export default productOperations;
