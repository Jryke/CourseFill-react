import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements';


class Checkout extends React.Component {
	render () {
	return (
		<CardElement />
  )
}
}

export default injectStripe(Checkout)
