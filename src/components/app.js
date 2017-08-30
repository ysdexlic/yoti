import React, { Component } from 'react'
import { Header } from './common/header'
import { Menu } from './menu'
import { Activity } from './activity'

export class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<div style={{display: 'flex'}}>
					<Menu />
					<div className="app-content">
						<Activity />
					</div>
				</div>
			</div>
		);
	}
}

export default App
