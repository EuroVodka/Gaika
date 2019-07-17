import { updateAction } from '../actions/ActionNames'
import UpdateActionType from './types'

export default ( state, { type, payload }: UpdateActionType ) => {
	switch ( type ) {
	case updateAction:
		return { [payload.field]: payload.value }
	default:
		return state
	}
}
