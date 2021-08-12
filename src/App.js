import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notesActions, notesOperations, notesSelectors } from './redux/notes';

function App() {
	const dispatch = useDispatch();

	const [noteTopic, setNoteTopic] = useState('');

	const persons = useSelector(notesSelectors.getNotes);
	const changeNotesId = useSelector(notesSelectors.getChangeNoteId);
	const showEditForm = useSelector(notesSelectors.showEditForm);

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

	const handleTopicChange = useCallback(
		e => {
			const { value } = e.currentTarget;
			setNoteTopic(value);
			dispatch(notesOperations.updateNotes(changeNotesId, value));
		},
		[dispatch, noteTopic],
	);

	return (
		<div id="app">
			<h1>IndexedDB notes</h1>
			<button onClick={addNote}>Add</button>
			<ul>
				{persons?.map(({ topic, date, id }) => {
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
										/>
									) : (
										<p>{topic}</p>
									)}
									<button onClick={() => editNote(topic)}>Edit</button>
									<button onClick={() => null}>Delete</button>
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
