import React from 'react'
import { connect } from 'react-redux'
import { Input, Control, Field } from 'rbx'

import { updateAction } from '../../store/actions/update'

interface AmountProps {
	update: Function //from redux
}

const AmountInput = ( props: AmountProps ) => (
	<Field>
		<Control>
			<Input
				onChange={ ( e ) => props.update( e.target.value ) }
				type="text"
				placeholder="Amount"
			/>
		</Control>
	</Field>
)

const mapDispatchToProps = ( dispatch ) => ( {
	// dispatching plain action
	update: ( amountValue ) =>
		dispatch( updateAction( { field: 'amount', value: amountValue } ) ),
} )
// map action `update`
export default connect(
	null,
	mapDispatchToProps,
)( AmountInput )
