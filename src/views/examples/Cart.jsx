import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import axios from 'axios'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
//
class Cart extends React.Component {
	state = {
		name: [],
		price: 0,
		cart: []
	}
//
//
//
//
  componentDidMount() {
		this.setState({cart: JSON.parse(localStorage.getItem('cart'))})
		console.log(this.state.cart)
}

removeItem = (e, course) => {
	e.preventDefault()
	let index = this.state.cart.findIndex(el => el.name === course.name)
	let cartArr = this.state.cart
	cartArr.splice(index, 1)
	let cart = this.state.cart
	localStorage.setItem('cart', JSON.stringify(cart))
	this.setState({cart})
}

	clearCart = () => {
		 localStorage.removeItem('cart');
		 this.setState({cart: []});
	 }
//
	render () {
		return (
			<div>
				{console.log(this.state.cart)}

				{(this.state.cart.map((course, key) => {
					return (<div key={key}>{course.name} ${course.price}
					<span>
						{console.log(course)}
						<Button size="sm" color="primary" onClick={e => this.removeItem(e, course.name )
							}
					style={{ marginRight: "10px" }}>Remove Course</Button></span></div>
				)}))}

				<div>Total:	${(this.state.cart.reduce((a, c) =>
					a + c.price, 0))}</div>

				<Button size="sm" color="danger" onClick={this.clearCart}
				style={{ marginRight: "10px" }}>Clear Cart</Button>
			{console.log(localStorage)}
			</div>
				)
			// // // 		<div>
			// // // 				 <h3 className="card-title">Cart</h3><hr />
			// // // 				 {
			// // // 					 courses.map((course, index) =>
			// // // 						 <CartItem course={course} remove={this.removeFromCart} key={index}/>)
			// // // 				 } <hr/>
			// // // 			 { courses.length ?
			// // // 					 <div><h4>
			// // // 						 <small>Total Amount: </small>
			// // // 						 <span className="float-right text-primary">${total}</span>
			// // // 					 </h4><hr/></div>: ''}
			// // // 				 { !courses.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
			// // // 				 <Link to="/checkout">
			// // // 						 <Button className="btn btn-success float-right">Checkout</Button></Link>
			// // //
			// // // 			 </div>
			// // 	}



}
}
//
export default Cart
