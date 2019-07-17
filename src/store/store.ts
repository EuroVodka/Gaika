import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import main from './reducers/main'

const preloadedState = {
	amount: 0,
	ratio: 0,
	result: 0,
}

const reducer = main

const middleware = [...getDefaultMiddleware()]

export const store = configureStore( {
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
	// ts error on preloadedState
	preloadedState: preloadedState as object,
} )

/* SAMPLE NORMAL REDUX STORE CONF
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import rootReducer from './reducers'

const preloadedState = {
	amount: 0,
	ratio: 0,
	result: 0,
}


export default function configureStore(preloadedState) {
  const middlewares = [ thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
*/
