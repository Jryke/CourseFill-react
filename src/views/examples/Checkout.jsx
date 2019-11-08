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
				description: 'Course Registration',
				source: res.token.id
			})
			.then(res => {
				alert('Payment successful')
			})
			.then(res => {
				let courses = this.props.user.courses
				this.props.cart.forEach(course => {
					if (!courses.includes(course._id)) {
						courses.push(course._id)
					}
				})
				axios.patch(`${process.env.REACT_APP_API_PORT}/students/${this.props.user._id}`, {
					courses: courses
				})
			})
			.then(res => {
				axios.all(
					this.props.cart.map(course => {
						return (
							axios.patch(`${process.env.REACT_APP_API_PORT}/courseAddStudent/${course._id}`, {
							students: this.props.user._id
							})
						)
					})
				)
			})
			.then(res => {
				localStorage.removeItem("cart")
			})
		})
		.catch(err => {
			alert('Please complete payment information')
			console.log(err)
		})
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
