import React from 'react'
import { connect } from 'react-redux'
import { Input, Control, Field } from 'rbx'

import mapDispatchToProps from '../../shared-logic/dispatch_updateAction'

interface AmountProps {
	update: Function //from redux
}
const RateInput = ( props: AmountProps ) => (
	<Field>
		<Control>
			<Input
				onChange={ ( e ) => props.update( 'rate', e.target.value ) }
				type="text"
				placeholder="..x Rate "
				rounded
			/>
		</Control>
	</Field>
)

export default connect(
	null,
	mapDispatchToProps,
)( RateInput )
