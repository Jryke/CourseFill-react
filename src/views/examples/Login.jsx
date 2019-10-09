/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from 'axios'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	}

	sendDataToState = (event, input) => {
		 let state = this.state
		 state[input] = event.target.value
		 this.setState({state})
	 	}

		submitForm = (e) => {
	  e.preventDefault();
	  axios.post(`${process.env.REACT_APP_API_PORT}/login`, {
			email: this.state.email,
			password: this.state.password
		})
	  .then(res => {
	    if (res.status === 200) {
      localStorage.setItem('token', res.data.token)
        console.log(res.data.data)
        if (res.data.data === "student") {
          this.props.history.push('/student/courses')
        } else {
          this.props.history.push('/admin/courses')
        }
	    } else {
			  alert('Error logging in please try again');
	    }
	  })
	  .catch(err => {
	    console.error(err);
	    alert('Error logging in please try again');
	  });
	}

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Welcome Back!</small>
              </div>

            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Login Information</small>
              </div>
              <Form onSubmit={this.submitForm} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={(e) => this.sendDataToState(e, 'email')} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" onChange={(e) => this.sendDataToState(e, 'password')}/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span>Forgot password?</span>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => {
									e.preventDefault()
									this.props.history.push('/auth/student-register')
									}}
	              >
                <span>Create new account</span>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
