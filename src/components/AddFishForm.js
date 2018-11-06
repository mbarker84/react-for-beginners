import React from 'react'

class AddFishForm extends React.Component {
	nameRef = React.createRef()
	priceRef = React.createRef()
	statusRef = React.createRef()
	descRef = React.createRef()
	imageRef = React.createRef()

	createFish = event => {
		event.preventDefault()

		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		}

		this.props.addFish(fish)

		event.currentTarget.reset()

		console.log(fish)
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input type="text" ref={this.nameRef} placeholder="Name" />
				<input type="text" ref={this.priceRef} placeholder="Price" />
				<select ref={this.statusRef}>
					<option value="available">Fresh</option>
					<option value="unavailable">Sold out</option>
				</select>
				<textarea ref={this.descRef} placeholder="Desc" />
				<input ref={this.imageRef} type="text" placeholder="Image" />
				<button type="submit">+ Add fish</button>
			</form>
		)
	}
}

export default AddFishForm
