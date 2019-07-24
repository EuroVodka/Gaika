import React from 'react'
import { connect } from 'react-redux'
import { Control, Field } from 'rbx'

import { resultSelector } from '../../store/selectors'

interface AmountProps {
	result: number //from redux
}

const ResultOutput = ( props: AmountProps ) => (
	<Field>
		<Control>
			<output>{ props.result }</output>
		</Control>
	</Field>
)

const mapStateToProps = ( state ) => ( {
	result: resultSelector( state ),
} )
export default connect( mapStateToProps )( ResultOutput )
