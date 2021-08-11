import { DBConfig } from './db/connect';
import { initDB, useIndexedDB } from 'react-indexed-db';
import React, { useState, useEffect } from 'react';

initDB(DBConfig);

function App() {
	const db = useIndexedDB('people');

	const { add, getAll } = useIndexedDB('people');
	const [persons, setPersons] = useState([]);

	const handleClick = () => {
		add({ name: 'Petya', email: 'petya@gmail.com' }).then(
			event => {
				console.log('ID Generated: ', event);
			},
			error => {
				console.log(error);
			},
		);
	};
	useEffect(() => {
		getAll().then(personsFromDB => {
			setPersons(personsFromDB);
		});
	}, []);

	return (
		<div id="app">
			<h1>IndexedDB notes</h1>

			<button onClick={handleClick}>Add</button>
			{persons.map(({ name, email }) => {
				return (
					<>
						<h1>{name}</h1>
						<p>{email}</p>
					</>
				);
			})}
		</div>
	);
}

export default App;
