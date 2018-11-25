import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		addFish: PropTypes.func,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}

	state = {
		uid: null,
		owner: null
	}

	authhandler = async authData => {
		const store = await base.fetch(this.props.storeId, { context: this })
		console.log(store)

		if (!store.owner) {
			await base.post(`${this.props.storeId}/owner`, {
				data: authData.user.uid
			})
		}

		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		})
	}

	authenticate = provider => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]()
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler)
	}

	logout = async () => {
		console.log('logging out')
		await firebase.auth().signOut()
		this.setState({ uid: null })
	}

	render() {
		const logout = <button onClick={() => this.logout}>Logout</button>

		// Check if they’re logged in
		if (!this.state.uid) {
			console.log('not logged in')
			return <Login authenticate={this.authenticate} />
		}

		// Check if they’re the owner
		if (this.state.uid !== this.state.owner) {
			console.log('not the owner')
			return (
				<div>
					<p>Sorry you are not the owner</p>
					{logout}
				</div>
			)
		}

		// If they’re the owner, render inventory
		return (
			<div className="inventory">
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm
						key={key}
						index={key}
						fish={this.props.fishes[key]}
						updateFish={this.props.updateFish}
						deleteFish={this.props.deleteFish}
					/>
				))}
				<h2>Inventory</h2>
				{logout}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
		)
	}
}

export default Inventory
