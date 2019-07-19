import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import update from './reducers/update'

const preloadedState = {
	amount: 0,
	ratio: 0,
	result: 0,
}

const reducer = update

const middleware = [...getDefaultMiddleware()]

export const store = configureStore( {
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
} )
