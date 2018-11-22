import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCNz-H8sFyuJ33iJ67n7PqnStBynnyZWvI',
	authDomain: 'cath-of-the-day-michelle-b.firebaseapp.com',
	databaseURL: 'https://cath-of-the-day-michelle-b.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base
