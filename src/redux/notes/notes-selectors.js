const getNotes = state => state.notes;
const getChangeNoteId = state => state.changeNote.id;
const ifEditProduct = state => state.changeNote.edit;

const showEditForm = state => state.showEditForm;

// eslint-disable-next-line
export default {
	getNotes,
	getChangeNoteId,
	ifEditProduct,
	showEditForm,
};
