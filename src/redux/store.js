import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notesReducer } from './notes';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
// import logger from 'redux-logger';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	// logger,
];

const store = configureStore({
	reducer: notesReducer,
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

export default store;
