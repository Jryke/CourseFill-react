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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from 'react-router-dom'
// core components
import UserHeader from "../../components/Headers/UserHeader.jsx";
import axios from "axios";

class Profile extends React.Component {
  state = {
    user: {
      courses: [],
      address: {}
    }
  }
  componentDidMount() {
    let token = localStorage.getItem('token')
    axios.post(`${process.env.REACT_APP_API_PORT}/auth`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res.data)
      let user = res.data
      this.setState({user})
    })
  }
  submitUpdates = (e) => {
		e.preventDefault()
		axios.patch(`${process.env.REACT_APP_API_PORT}/students/${this.props.match.params.id}`, this.state.user)
			.then(data => {
					this.setState({
						editable: !this.state.editable
					})
			}).catch(err => {
				console.log("Error")
			})
	}
	cancelUpdates = (e) => {
		e.preventDefault()
		axios.get(`${process.env.REACT_APP_API_PORT}/user/${this.props.match.params.id}`)
				.then(res => {
						const data = res.data
						this.setState({data: data})
				}).catch(err => {
					console.log("Error")
				})
		this.setState({
			editable: !this.state.editable
		})
	}
	sendInputToState = (e, stateRef, stateObj) => {
		let user = this.state.user
		if (stateObj) {
			user[stateObj][stateRef] = e.target.value
		} else {
			user[stateRef] = e.target.value
		}
		this.setState({user})
	}
	getTeachersFromCourses = () => {
		let teachersArray = []
		this.state.user.courses.forEach(course => {
			course.teachers.forEach(teacher => {
				let checkArr = teachersArray.map(teacher => teacher._id)
				if (!checkArr.includes(teacher._id)) {
					teachersArray.push(teacher)
				}
			})
		})
		return teachersArray
	}
	renderAddressInfo = (info) => {
		if (this.state.user.address) {
			return this.state.user.address[info]
		} else {
			return null
		}
	}
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        {
					!this.state.editable ? (
						<Container className="mt--7" fluid>
							<Row>
								<Col className="order-xl-1 mb-6" xl="10">
									<Card className="bg-secondary shadow">
										<CardHeader className="bg-white border-0">
											<Row className="align-items-center">
												<Col xs="8">
													<h3 className="mb-0">Student information</h3>
												</Col>
												<Col className="text-right" xs="4">
													<Button
														color="primary"
														href="#pablo"
														onClick={e => {
															e.preventDefault()
															this.setState({
																editable: !this.state.editable
															})
														}}
														size="sm"
													>
														Edit student info
													</Button>
												</Col>
											</Row>
										</CardHeader>
										<CardBody>
											<Form>
												<h6 className="heading-small text-muted mb-4">
													General information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col lg="4">
															<div>
																<small className="form-control-label">First name</small>
																<h1>{this.state.user.first_name}</h1>
			                        </div>
														</Col>
														<Col lg="4">
															<div>
																<small className="form-control-label">Middle name</small>
																<h1>{this.state.user.middle_name}</h1>
			                        </div>
														</Col>
														<Col lg="4">
															<div>
																<small className="form-control-label">Last name</small>
																<h1>{this.state.user.last_name}</h1>
			                        </div>
														</Col>
													</Row>
													<Row>
														<Col md="12">
															<div>
																<small className="form-control-label">About</small>
																<h3>{this.state.user.about}</h3>
			                        </div>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Contact information */}
												<h6 className="heading-small text-muted mb-4">
													Contact information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col lg="6">
															<div>
																<small className="form-control-label">Email address</small>
																<h1>{this.state.user.email}</h1>
			                        </div>
		                        </Col>
														<Col lg="6">
															<div>
																<small className="form-control-label">Phone number</small>
																<h2>{this.state.user.phone}</h2>
															</div>
		                        </Col>
													</Row>
		                    </div>
												<hr className="my-4" />
												{/* Address */}
												<h6 className="heading-small text-muted mb-4">
													Address information
												</h6>
												<div className="pl-lg-4">
		                      <Row>
		                        <Col md="12">
															<div>
																<small className="form-control-label">Street address</small>
																<h2>{this.renderAddressInfo("streetAddress")}</h2>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="6">
		                          <FormGroup>
																<div>
																	<small className="form-control-label">City</small>
																	<h2>{this.renderAddressInfo("city")}</h2>
				                        </div>
		                          </FormGroup>
		                        </Col>
		                        <Col lg="6">
															<div>
																<small className="form-control-label">State</small>
																<h2>{this.renderAddressInfo("state")}</h2>
															</div>
		                        </Col>
													</Row>
													<Row>
														<Col lg="6">
															<div>
																<small className="form-control-label">Country</small>
																<h2>{this.renderAddressInfo("country")}</h2>
															</div>
		                        </Col>
														<Col lg="6">
															<div>
																<small className="form-control-label">Postal code</small>
																<h2>{this.renderAddressInfo("zipCode")}</h2>
															</div>
		                        </Col>
													</Row>
		                    </div>
												<hr className="my-4" />
												{/* Courses */}
												<h6 className="heading-small text-muted mb-4">
													Registered courses
												</h6>
												<div className="pl-lg-4">
													{
														this.state.user.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../course/${course._id}`}>
																		<span>{course.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
												{/* Teachers */}
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>
												<div className="pl-lg-4">
													{
														this.getTeachersFromCourses().map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../teacher/${teacher._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.avatar}
																			/>
																		</span>
																		<span>{teacher.first_name} {teacher.last_name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
											</Form>
										</CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												<Col className="text-right" xs="4">
													<Button
														color="primary"
														href="#pablo"
														onClick={e => {
															e.preventDefault()
															this.setState({
																editable: !this.state.editable
															})
														}}
														size="sm"
													>
														Edit student info
													</Button>
												</Col>
											</Row>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
					) : (
						<Container className="mt--7" fluid>
							<Row>
								<Col className="order-xl-1 mb-6" xl="10">
									<Card className="bg-secondary shadow">
										<CardHeader className="bg-white border-0">
											<Row className="align-items-center">
												<Col xs="8">
													<h3 className="mb-0">Student information</h3>
												</Col>
												<Col className="text-right" xs="4">
		                      <Button
		                        color="default"
		                        href="#pablo"
		                        onClick={this.cancelUpdates}
		                        size="sm"
		                      >
		                        Cancel changes
		                      </Button>
		                      <Button
		                        color="primary"
		                        form="course-edit"
		                        type="submit"
		                        size="sm"
														onClick={this.submitUpdates}
		                      >
		                        Save changes
		                      </Button>
		                    </Col>
											</Row>
										</CardHeader>
										<CardBody>
											<Form>
												<h6 className="heading-small text-muted mb-4">
													General information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-first-name"
																>
																	First name
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="First name"
																	defaultValue={this.state.user.first_name}
																	id="input-first-name"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'first_name')}
																/>
															</FormGroup>
														</Col>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-middle-name"
																>
																	Middle name
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Middle name"
																	defaultValue={this.state.user.middle_name}
																	id="input-middle-name"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'middle_name')}
																/>
															</FormGroup>
														</Col>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-last-name"
																>
																	Last name
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Last name"
																	defaultValue={this.state.user.last_name}
																	id="input-last-name"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'last_name')}
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col md="12">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-about"
																>
																	About
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="About me..."
																	defaultValue={this.state.user.about}
																	rows="4"
																	type="textarea"
																	onChange={e => this.sendInputToState(e, 'about')}
																/>
															</FormGroup>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Contact information */}
												<h6 className="heading-small text-muted mb-4">
													Contact information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-email"
																>
																	Email address
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Email address"
																	defaultValue={this.state.user.email}
																	id="input-email"
																	type="email"
																	onChange={e => this.sendInputToState(e, 'email')}
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-phone"
																>
																	Phone number
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="xxx-xxx-xxxx"
																	defaultValue={this.state.user.phone}
																	id="input-phone"
																	type="tel"
																	onChange={e => this.sendInputToState(e, 'email')}
																/>
															</FormGroup>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Address */}
												<h6 className="heading-small text-muted mb-4">
													Address information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col md="12">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-address"
																>
																	Street address
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Street address"
																	defaultValue={this.renderAddressInfo("streetAddress")}
																	id="input-address"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'streetAddress', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	City
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="City"
																	defaultValue={this.renderAddressInfo("city")}
																	id="input-city"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'city', 'address')}
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-state"
																>
																	State
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="State"
																	defaultValue={this.renderAddressInfo("state")}
																	id="input-state"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'country', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-country"
																>
																	Country
																</label>
																<Input
																	className="form-control-alternative"
																	placeholder="Country"
																	defaultValue={this.renderAddressInfo("country")}
																	id="input-country"
																	type="text"
																	onChange={e => this.sendInputToState(e, 'country', 'address')}
																/>
															</FormGroup>
														</Col>
														<Col lg="6">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-country"
																>
																	Postal code
																</label>
																<Input
																	className="form-control-alternative"
																	id="input-postal-code"
																	placeholder="Postal code"
																	defaultValue={this.renderAddressInfo("zipCode")}
																	type="number"
																	onChange={e => this.sendInputToState(e, 'zipCode', 'address')}
																/>
															</FormGroup>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Courses */}
												<h6 className="heading-small text-muted mb-4">
													Registered courses
												</h6>
												<div className="pl-lg-4">
													{
														this.state.user.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../course/${course._id}`}>
																		<span>{course.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
												{/* Teachers */}
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>
												<div className="pl-lg-4">
													{
														this.getTeachersFromCourses().map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../teacher/${teacher._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.avatar}
																			/>
																		</span>
																		<span>{teacher.first_name} {teacher.last_name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
											</Form>
										</CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												<Col className="text-right" xs="4">
		                      <Button
		                        color="default"
		                        href="#pablo"
		                        onClick={this.cancelUpdates}
		                        size="sm"
		                      >
		                        Cancel changes
		                      </Button>
		                      <Button
		                        color="primary"
		                        form="course-edit"
		                        type="submit"
		                        size="sm"
														onClick={this.submitUpdates}
		                      >
		                        Save changes
		                      </Button>
		                    </Col>
											</Row>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
					)
				}
      </>
    );
  }
}

export default Profile;
