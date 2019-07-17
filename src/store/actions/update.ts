import * as names from './ActionNames'
import { KeyUpdate } from './types'

export const updateAction = ( payload: KeyUpdate ) => ( {
	type: names.updateAction,
	payload,
} )
