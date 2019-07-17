export default interface UpdateActionType {
	type: string
	payload: {
		value: number
		field: string
	}
}
