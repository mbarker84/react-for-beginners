import React from 'react'

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				<label htmlFor="storeFinder">Find a store</label>
				<input type="text" id="storeFinder" required placeholder="store name" />
				<button type="submit">View store</button>
			</form>
		)
	}
}

export default StorePicker
