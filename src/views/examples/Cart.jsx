import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import Checkout from './Checkout'



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
		cart: [],
		total: ''
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
			<>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">

									{(this.state.cart.map((course, key) => {
										return (<div className="text-center text-muted mb-4" key={key}>{course.name} <span style={{ marginLeft: "1rem" }}> ${course.price}</span>
										<span>
											<Button size="sm" color="primary" onClick={e => this.removeItem(e, course.name )
												}
										style={{ marginLeft: "1rem" }}>Remove Course</Button></span></div>
									)}))}

									<div className="text-center text-heavy mb-4">Total:	${(this.state.cart.reduce((a, c) =>
										a + c.price, 0))}</div>


									<Button size="sm" color="danger" onClick={this.clearCart}
									style={{ marginRight: "10px" }}>Clear Cart</Button>


              </div>

            </CardBody>

							<StripeProvider apiKey="pk_test_P55aXLui6UUIKIktSJYLq56p00uE4eoJif">
								<Elements>
									<Checkout />
								</Elements>
							</StripeProvider>

          </Card>
        </Col>
      </>

				)






}
}
//
export default Cart
