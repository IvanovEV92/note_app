import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notesActions, notesOperations, notesSelectors } from './redux/notes';

function App() {
	const dispatch = useDispatch();

	const [noteTopic, setNoteTopic] = useState('');

	const notes = useSelector(notesSelectors.getVisibleNotes);
	const changeNotesId = useSelector(notesSelectors.getChangeNoteId);
	const showEditForm = useSelector(notesSelectors.showEditForm);
	const valueFilter = useSelector(notesSelectors.getFilter);

	const addNote = useCallback(() => {
		dispatch(notesOperations.addNotes());
	}, [dispatch]);

	useEffect(() => {
		dispatch(notesOperations.fetchNotes());
	}, [dispatch]);

	const fetchNote = useCallback(
		id => {
			dispatch(notesOperations.fetchNotesById(id));
		},
		[dispatch],
	);

	const editNote = useCallback(
		topic => {
			setNoteTopic(topic);
			dispatch(notesActions.showEditForm());
		},
		[dispatch],
	);

	const closeForm = useCallback(() => {
		dispatch(notesActions.closeEditForm());
	}, [dispatch]);

	const handleTopicChange = useCallback(
		e => {
			const { value } = e.currentTarget;
			setNoteTopic(value);
			dispatch(notesOperations.updateNotes(changeNotesId, value));
		},
		[dispatch, changeNotesId],
	);

	const deleteNote = useCallback(
		id => {
			dispatch(notesOperations.deleteNote(id));
		},
		[dispatch],
	);

	const onChangeFilter = useCallback(
		e => {
			dispatch(notesActions.changeFilter(e.currentTarget.value));
		},
		[dispatch],
	);

	return (
		<div id="app">
			<h1>IndexedDB notes</h1>
			<button onClick={addNote}>Add</button>
			<input
				type="text"
				value={valueFilter}
				placeholder="Поиск"
				onChange={onChangeFilter}
			/>
			<ul>
				{notes?.map(({ topic, date, id }) => {
					return (
						<li key={id} onClick={() => fetchNote(id)}>
							<p>{topic}</p>
							<p>{date}</p>
							{changeNotesId === id && (
								<>
									{showEditForm ? (
										<textarea
											type="text"
											name="description"
											value={noteTopic}
											placeholder="Description"
											onChange={handleTopicChange}
											onBlur={() => closeForm()}
											autoFocus
										/>
									) : (
										<p>{topic}</p>
									)}
									<button onClick={() => editNote(topic)}>Edit</button>
									<button onClick={() => deleteNote(id)}>Delete</button>
								</>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
