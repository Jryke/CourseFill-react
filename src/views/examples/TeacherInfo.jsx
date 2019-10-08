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
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx";


class TeacherInfo extends React.Component {
	state = {
		editable: false,
		teacher: {
			courses: [],
			address: {},
			students: []
		}
	}
	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/user/${this.props.match.params.id}`)
			.then(res => {
					this.setState({teacher: res.data})
			}).catch(err => {
				console.log("Error")
			})
	}
	renderEditButton = () => {
		let teacherId = this.props.match.params.id
		if (this.props.location.pathname === `/admin/teacher/${teacherId}`) {
			return(
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
						Edit teacher info
					</Button>
				</Col>
			)
		}
	}
	sendInputToState = (e, stateRef, stateObj) => {
		let teacher = this.state.teacher
		if (stateObj) {
			teacher[stateObj][stateRef] = e.target.value
		} else {
			teacher[stateRef] = e.target.value
		}
		this.setState({teacher})
	}
	submitUpdates = (e) => {
		e.preventDefault()
		axios.patch(`${process.env.REACT_APP_API_PORT}/teachers/${this.props.match.params.id}`, this.state.teacher)
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
					this.setState({
						teacher: res.data,
						editable: !this.state.editable
					})
			}).catch(err => {
				console.log("Error")
			})
	}
	renderStudents = () => {
		if (this.state.teacher.students) {
			return(
				this.state.teacher.students.map((student, key) => {
					return(
						<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
							<Link to={`../student/${student._id}`}>
								<span className="avatar avatar-sm" >
									<img
										alt="..."
										className="rounded-circle"
										src={student.avatar}
									/>
								</span>
								<span>{student.first_name} {student.last_name}</span>
							</Link>
						</div>
					)
				})
			)
		} else {
			return null
		}
	}
  render() {
		console.log(this.state)
    return (
      <>
        <DetailsHeader title={"Teacher Name"} info={"About Teacher"} />
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
		                      <h3 className="mb-0">Teacher</h3>
		                    </Col>
		                    {
													this.renderEditButton()
												}
		                  </Row>
		                </CardHeader>
		                <CardBody>
		                  <Form>
		                    <h6 className="heading-small text-muted mb-4">
		                      Teacher information
		                    </h6>
		                    <div className="pl-lg-4">
													<Row>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">First name</small>
																<h1>{this.state.teacher.first_name}</h1>
			                        </div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Middle name</small>
																<h1>{this.state.teacher.middle_name}</h1>
			                        </div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Last name</small>
																<h1>{this.state.teacher.last_name}</h1>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="12">
															<div>
																<small className="form-control-label">Email address</small>
																<h1>{this.state.teacher.email}</h1>
			                        </div>
		                        </Col>
		                      </Row>
													<Row>
														<Col md="12">
															<div>
																<small className="form-control-label">About</small>
																<h3>{this.state.teacher.about}</h3>
			                        </div>
														</Col>
													</Row>
		                    </div>
												{/* CONTACT INFO ONLY AVAILABLE TO ADMIN */}
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
																<h3>{this.state.teacher.address.streetAddress}</h3>
			                        </div>
		                        </Col>
		                      </Row>
		                      <Row>
		                        <Col lg="4">
		                          <FormGroup>
																<div>
																	<small className="form-control-label">City</small>
																	<h3>{this.state.teacher.address.city}</h3>
				                        </div>
		                          </FormGroup>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Country</small>
																<h3>{this.state.teacher.address.country}</h3>
															</div>
		                        </Col>
		                        <Col lg="4">
															<div>
																<small className="form-control-label">Postal code</small>
																<h3>{this.state.teacher.address.zipCode}</h3>
															</div>
		                        </Col>
		                      </Row>
		                    </div>

												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses taught by this teacher
		                    </h6>
		                    <div className="pl-lg-4">
													{
														this.state.teacher.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../course/${course._id}`}>
																		<p>{course.name}</p>
																	</Link>
																</div>
															)
														})
													}
		                    </div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Students
		                    </h6>
		                    <div className="pl-lg-4">
													{
														this.renderStudents()
													}
		                    </div>
		                  </Form>
		                </CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												{
													this.renderEditButton()
												}
											</Row>
										</CardFooter>
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
		                      <h3 className="mb-0">Teacher</h3>
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
		                      Teacher information
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
		                              defaultValue={this.state.teacher.first_name}
		                              id="input-first-name"
		                              placeholder="First name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "first_name")}
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
		                              defaultValue={this.state.teacher.middle_name}
		                              id="input-middle-name"
		                              placeholder="Middle name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "middle_name")}
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
		                              defaultValue={this.state.teacher.last_name}
		                              id="input-last-name"
		                              placeholder="Last name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "last_name")}
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
																	defaultValue={this.state.teacher.email}
		                              id="input-email"
		                              placeholder="name@example.com"
		                              type="email"
																	onChange={e => this.sendInputToState(e, "email")}
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
				                          placeholder="Tell a little bit about yourself..."
				                          rows="4"
				                          defaultValue={this.state.teacher.about}
				                          type="textarea"
																	onChange={e => this.sendInputToState(e, "about")}
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
																	defaultValue={this.state.teacher.address.streetAddress}		                              id="input-address"
		                              placeholder="Home Address"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "streetAddress", "address")}
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
		                              defaultValue={this.state.teacher.address.city}
		                              id="input-city"
		                              placeholder="City"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "city", "address")}
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
		                              defaultValue={this.state.teacher.address.country}
		                              id="input-country"
		                              placeholder="Country"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "country", "address")}
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
																	defaultValue={this.state.teacher.address.zipCode}
		                              id="input-postal-code"
		                              placeholder="Postal code"
		                              type="number"
																	onChange={e => this.sendInputToState(e, "zipCode", "address")}
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
		                    </div>
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses taught by this teacher
		                    </h6>
												<div className="pl-lg-4">
													{
														this.state.teacher.courses.map((course, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../course/${course._id}`}>
																		<p>{course.name}</p>
																	</Link>
																</div>
															)
														})
													}
		                    </div>

												{/* THIS SECTION MUST ONLY BE AVAILABLE TO TEACHERS/ADMINS */}

												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Students
		                    </h6>
												<div className="pl-lg-4">
													{
														this.renderStudents()
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
export default TeacherInfo;
