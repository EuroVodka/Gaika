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
	update: ( amountValue: number ) =>
		dispatch(
			updateAction( {
				field: 'amount',
				value: amountValue,
			} ),
		),
} )

export default connect(
	null,
	mapDispatchToProps,
)( AmountInput )
