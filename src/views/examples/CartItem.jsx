// import React from 'react'
//
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   Container,
//   Row,
//   Col
// } from "reactstrap";
//
// class CartItem extends React.Component {
// 	state = {
// 		quantity: 1
// 	}
//
//
//
// 	render () {
// 		let course = this.props.course
// 		return (
// 		<Card className="bg-secondary shadow">
// 				 <CardBody>
// 					 <h4 className="card-title">{course.name}</h4>
// 					 <h5 className="card-text"><small>price: </small>${course.price}</h5>
// 					 <span className="card-text text-success">
// 							 <small>Quantity: </small>{course.qty}</span>
// 					 <button className="btn btn-sm btn-warning float-right"
// 							 onClick={() => this.props.remove(course)}>Remove from cart</button>
// 					 </CardBody>
// 			 </Card>
// 			)
// 	)
// 	}
// }
//
// export default CartItem
