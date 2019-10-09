import React from 'react'
import { CardElement, injectstripe } from 'react-stripe-elements'

class Payments extends React.Component {
	render () {
		<CardElement />
	}
}

export default injectstripe(Payments)
