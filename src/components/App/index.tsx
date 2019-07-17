import React from 'react'
import { Provider } from 'react-redux'
import { Section } from 'rbx'
import 'rbx/index.css'

import './App.css'

import Logo from '../Logo'
import AmountInput from '../AmountInput'
import RateInput from '../RateInput'
import ResultOutput from '../ResultOutput'
import { store } from '../../store/store'

const App: React.FC = () => (
	<Provider store={ store }>
		<div className="App">
			<header className="App-header">
				<Logo />
			</header>
			<Section>
				<AmountInput />
				<RateInput />
				<ResultOutput />
			</Section>
		</div>
	</Provider>
)

export default App
