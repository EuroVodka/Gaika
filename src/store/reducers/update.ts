import { createReducer } from 'redux-starter-kit'

import { updateAction } from '../actions/ActionNames'
import UpdateActionType from './types'

const update = createReducer(
	{},
	{
		[updateAction]: ( state, { payload }: UpdateActionType ) => {
			state[payload.field] = payload.value
		},
	},
)

export default update
