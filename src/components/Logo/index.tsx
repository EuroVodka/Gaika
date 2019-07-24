import React from 'react'
import { Control, Field } from 'rbx'

import './Logo.css'
import logo from '../../static/Eurostars.svg'

const Logo: React.FC = () => (
	<Field>
		<Control>
			<img src={ logo } className="App-logo" alt="logo" />
		</Control>
	</Field>
)

export default React.memo( Logo )
