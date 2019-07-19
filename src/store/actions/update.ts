import * as names from './ActionNames'
import { KeyUpdate } from './types'

/* avoid usage of redux-starter-kit here because of lack of chance of action types */
export const updateAction = ( payload: KeyUpdate ) => ( {
	type: names.updateAction,
	payload,
} )
