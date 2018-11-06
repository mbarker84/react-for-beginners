import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	myInput = React.createRef()

	goToStore = event => {
		event.preventDefault()

		const storeName = this.myInput.value.value

		this.props.history.push(`/store/${storeName}`)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<label htmlFor="storeFinder">Find a store</label>
				<input
					type="text"
					id="storeFinder"
					ref={this.myInput}
					required
					placeholder="store name"
					defaultValue={getFunName()}
				/>
				<button type="submit">View store</button>
			</form>
		)
	}
}

export default StorePicker
