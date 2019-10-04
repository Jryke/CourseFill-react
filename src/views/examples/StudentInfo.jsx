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
  FormGroup,
  Form,
	Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import axios from 'axios'
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx";

class StudentInfo extends React.Component {
	state = {
		editable: false,
		data: {
			courses: []
		}
	}
	renderLink = () => {
		let studentName = this.props.match.params.student
		if (this.props.location.pathname === `/admin/student/${studentName}`) {
			return `/admin/student-edit/${studentName}`
		} else if (this.props.location.pathname === '/student/profile') {
			return '/student/profile-edit'
		}
	}
	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/user/${this.props.match.params.id}`)
			.then(res => {
					const data = res.data
					this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
	}
	submitUpdates = (e) => {
		e.preventDefault()
		axios.patch(`${process.env.REACT_APP_API_PORT}/students/${this.props.match.params.id}`, this.state.data)
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
	sendInputToState = (e, stateRef) => {
		let data = this.state.data
		data[stateRef] = e.target.value
		this.setState({data})
	}
  render() {
		console.log(this.state)
    return (
      <>
				<DetailsHeader title={"Student Name"} info={"About Student"} />
				{/* Page content */}
				{
					!this.state.editable ? (
						<Container className="mt--7" fluid>
							<Row>
								<Col className="order-xl-1 mb-6" xl="8">
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
																<h1>{this.state.data.first_name}</h1>
			                        </div>
														</Col>
														<Col lg="4">
															<div>
																<small className="form-control-label">Middle name</small>
																<h1>{this.state.data.middle_name}*add middle name*</h1>
			                        </div>
														</Col>
														<Col lg="4">
															<div>
																<small className="form-control-label">Last name</small>
																<h1>{this.state.data.last_name}</h1>
			                        </div>
														</Col>
													</Row>
													<Row>
														<Col lg="6">
															<div>
																<small className="form-control-label">Email address</small>
																<h1>{this.state.data.email}</h1>
			                        </div>
														</Col>
													</Row>
													<Row>
														<Col md="12">
															<div>
																<small className="form-control-label">About</small>
																<h3>{this.state.data.about}*add about*</h3>
			                        </div>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Address */}
												<h6 className="heading-small text-muted mb-4">
													Contact information
												</h6>
												<div className="pl-lg-4">
		                      <Row>
		                        <Col md="12">
															<div>
																<small className="form-control-label">Address</small>
																<h3>{this.state.data.address}*add address*</h3>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="4">
		                          <FormGroup>
																<div>
																	<small className="form-control-label">City</small>
																	<h3>{this.state.data.address}*add city*</h3>
				                        </div>
		                          </FormGroup>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Country</small>
																<h3>{this.state.data.address}*add country*</h3>
															</div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Postal code</small>
																<h3>{this.state.data.address}*add postal code*</h3>
															</div>
		                        </Col>
		                      </Row>
		                    </div>
												<hr className="my-4" />
												{/* Courses */}
												<h6 className="heading-small text-muted mb-4">
													Registered courses
												</h6>
												{/*
												<div className="pl-lg-4">
													{
														this.state.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={course.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={course.img.src}
																			/>
																		</span>
																		<span>{course.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
												*/}

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
												{/* Teachers */}
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>
												{/*

												<div className="pl-lg-4">

													{
														this.state.teachers.map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={teacher.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.img.src}
																			/>
																		</span>
																		<span>{teacher.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
												*/}
											</Form>
										</CardBody>
									</Card>
								</Col>
								<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
									<TeacherCard />
								</Col>
							</Row>
						</Container>
					) : (
						<Container className="mt--7" fluid>
							<Row>
								<Col className="order-xl-1 mb-6" xl="8">
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
																	defaultValue={this.state.data.first_name}
																	id="input-first-name"
																	placeholder={this.state.data.first_name}
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
																	defaultValue={this.state.data.middle_name}
																	id="input-middle-name"
																	placeholder={this.state.data.middle_name}
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
																	defaultValue={this.state.data.last_name}
																	id="input-last-name"
																	placeholder={this.state.data.last_name}
																	type="text"
																	onChange={e => this.sendInputToState(e, 'last_name')}
																/>
															</FormGroup>
														</Col>
													</Row>
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
																	id="input-email"
																	placeholder={this.state.data.email}
																	type="email"
																	onChange={e => this.sendInputToState(e, 'email')}
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
																	placeholder={this.state.data.about}
																	rows="4"
																	defaultValue={this.state.data.about}
																	type="textarea"
																	onChange={e => this.sendInputToState(e, 'about')}
																/>
															</FormGroup>
														</Col>
													</Row>
												</div>
												<hr className="my-4" />
												{/* Address */}
												<h6 className="heading-small text-muted mb-4">
													Contact information
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col md="12">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-address"
																>
																	Address
																</label>
																<Input
																	className="form-control-alternative"
																	defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
																	id="input-address"
																	placeholder="Home Address"
																	type="text"
																/>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-city"
																>
																	City
																</label>
																<Input
																	className="form-control-alternative"
																	defaultValue="New York"
																	id="input-city"
																	placeholder="City"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-country"
																>
																	Country
																</label>
																<Input
																	className="form-control-alternative"
																	defaultValue="United States"
																	id="input-country"
																	placeholder="Country"
																	type="text"
																/>
															</FormGroup>
														</Col>
														<Col lg="4">
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
																	type="number"
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
												{/*
												<div className="pl-lg-4">
													{
														this.state.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={course.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={course.img.src}
																			/>
																		</span>
																		<span>{course.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
												*/}

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
												{/* Teachers */}
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>
												{/*

												<div className="pl-lg-4">

													{
														this.state.teachers.map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={teacher.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.img.src}
																			/>
																		</span>
																		<span>{teacher.name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
												*/}
											</Form>
										</CardBody>
									</Card>
								</Col>
								<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
									<TeacherCard />
								</Col>
							</Row>
						</Container>
					)
				}

      </>
    );
  }
}

export default StudentInfo;
