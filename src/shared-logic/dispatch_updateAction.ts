import { updateAction } from '../store/actions/update'

const mapDispatchToProps = ( dispatch ) => ( {
	update: ( field: string, value: number ) =>
		dispatch(
			updateAction( {
				field,
				value,
			} ),
		),
} )
export default mapDispatchToProps
