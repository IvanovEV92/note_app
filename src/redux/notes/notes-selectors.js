import { createSelector } from '@reduxjs/toolkit';

const getNotes = state => state.notes;
const getChangeNoteId = state => state.changeNote.id;
const ifEditProduct = state => state.changeNote.edit;

const showEditForm = state => state.showEditForm;

const getFilter = state => state.filter;

const getVisibleNotes = createSelector(
	[getNotes, getFilter],
	(notes, filter) => {
		const normalizedFilter = filter.toLowerCase();
		return notes.filter(item =>
			item.topic.toLowerCase().includes(normalizedFilter),
		);
	},
);

// eslint-disable-next-line
export default {
	getNotes,
	getChangeNoteId,
	ifEditProduct,
	showEditForm,
	getFilter,
	getVisibleNotes,
};
