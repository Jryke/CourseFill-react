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
// import jsonwebtoken from 'jsonwebtoken'

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

class Register extends React.Component {

	state = {
		first_name: '',
		middle_name: '',
    last_name: '',
    avatar: {},
		email: '',
		password: ''
	}

	sendDataToState = (event, input) => {
		 let state = this.state
		 state[input] = event.target.value
		 this.setState({state})
		}

  uploadAvatar = (e) => {
    let avatar = e.target.files[0]
		this.setState({avatar})
  }
  
	submitForm = (e) => {
    e.preventDefault();
    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password) {
      let formData = new FormData()
      formData.append('avatar', this.state.avatar)
      formData.append('first_name', this.state.first_name)
      formData.append('middle_name', this.state.middle_name)
      formData.append('last_name', this.state.last_name)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      axios.post(`${process.env.REACT_APP_API_PORT}/signup`, formData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token )
          this.props.history.push('/student/courses')
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error signing up please try again');
      });
    } else {
      alert('please complete all information to sign up')
    }
	}

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Student Registration</small>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Student Information</small>
              </div>
              <Form onSubmit={this.submitForm} role="form">
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name" type="text" onChange={(e) => this.sendDataToState(e, 'first_name')}/>
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Middle Name" type="text" onChange={(e) => this.sendDataToState(e, 'middle_name')} />
                  </InputGroup>
                </FormGroup>
								<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" onChange={(e) => this.sendDataToState(e, 'last_name')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <small style={{paddingTop: "10px", paddingLeft: "10px"}}>Profile Picture</small>
                    <Input type="file" onChange={this.uploadAvatar} />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={(e) => this.sendDataToState(e, 'email')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" onChange={(e) => this.sendDataToState(e, 'password')} />
										<span>*required</span>
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;

//Test 
