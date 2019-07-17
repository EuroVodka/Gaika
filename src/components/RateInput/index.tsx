import React from 'react'
import { Input, Control, Field } from 'rbx'

const RateInput = () => (
	<Field>
		<Control>
			<Input type="text" placeholder="..x Rate " rounded />
		</Control>
	</Field>
)
// map action `update`
export default RateInput
