import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button } from 'reactstrap'
import axios from 'axios'


class Checkout extends React.Component {
	submit = (e) => {
		this.props.stripe.createToken({})
		.then(res => {
			axios.post(`${process.env.REACT_APP_API_PORT}/pay`, {
				amount: this.props.total * 100,
				currency: 'usd',
				description: res.body.name,
				source: res.token.id
			}).then(res => {
				alert('Payment successful')
			}).then(res => {
				window.location.assign('https://media.giphy.com/media/3oeSALRyH4rYS3Nt8Q/giphy.gif');
			})
		}).catch(err => console.log(err))
	}

	render () {
	return (
		<>
		<CardElement />
			<Button onClick={this.submit} className="btn btn-success" size="sm">Checkout</Button>
			</>
  )
}
}

export default injectStripe(Checkout)
