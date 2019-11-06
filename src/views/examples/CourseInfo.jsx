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
  Col,
	Progress,
	CardFooter,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"
import Schedule from "./Schedule.jsx";

class CourseInfo extends React.Component {
	state = {
		editable: false,
		dropdownOpen: false,
		allTeachers: [{}],
		days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		data: {
			schedule: {
				days: []
			},
			students: [{}],
			teachers: [{}],
			registration: {}
		}
	}
	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/courses/${this.props.match.params.id}`)
			.then(res => {
				const data = res.data
				this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
	}

	addToCart = () => {
	let cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart')) : []
	let data = {name: this.state.data.name, price: this.state.data.price}
	cart.push(data)
	localStorage.setItem('cart', JSON.stringify(cart))
	alert("Course added succesfully")

}

	renderEditButton = () => {
		let courseId = this.state.data._id
		// MAKE THIS IF STATEMENT CHECK THAT USER IS ADMIN (NOT TEACHER OR STUDENT)
		if (this.props.location.pathname === `/admin/course/${courseId}`) {
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
						Edit course info
					</Button>
				</Col>
			)
		} else {
				return (
					<Col className="text-right" xs="4">
						<Button
							color="primary"
							data-toggle="modal"
							data-target="#exampleModal"
							size="sm"
							onClick={this.addToCart}>Add to cart
						</Button>
					</Col>

				)
		}
	}
	renderDeleteButton = () => {
		let courseId = this.state.data._id
		if (this.props.location.pathname === `/admin/course/${courseId}`) {
			return(
				<Row className="align-items-center">
					<Col className="text-center" xs="1">
						<Button
							color="danger"
							onClick={this.deleteClass}
							size="sm"
						>
							Delete class
						</Button>
					</Col>
				</Row>
			)
		}
	}
	sendInputToState = (e, stateRef, stateObj) => {
		let data = this.state.data
		if (stateObj) {
			data[stateObj][stateRef] = e.target.value
		} else {
			data[stateRef] = e.target.value
		}
		this.setState({data})
	}
	updateDays = (e, i, day) => {
		if (e.target.checked) {
			let state = this.state
			state.data.schedule.days.push(day)
			const sortDays = (a, b) => {
			  a = this.state.days.indexOf(a);
			  b = this.state.days.indexOf(b);
			  return a < b ? 0 : 1;
			}
			state.data.schedule.days.sort(sortDays)
			this.setState({state})
		} else if (!e.target.checked) {
			let index = this.state.data.schedule.days.indexOf(day)
			let state = this.state
			state.data.schedule.days.splice(index, 1)
			this.setState({state})
		}
	}
	submitUpdates = (e) => {
		e.preventDefault()
		axios.patch(`${process.env.REACT_APP_API_PORT}/courses/${this.props.match.params.id}`, this.state.data)
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
		axios.get(`${process.env.REACT_APP_API_PORT}/courses/${this.props.match.params.id}`)
			.then(res => {
				const data = res.data
				this.setState({
					data: data,
					editable: !this.state.editable
				})
			}).catch(err => {
				console.log("Error")
			})
	}
	deleteClass = (e) => {
		e.preventDefault()
		axios.delete(`${process.env.REACT_APP_API_PORT}/course/${this.props.match.params.id}`)
			.then(data => {
				console.log('classDeleted', data)
				this.props.history.push({
					pathname: "/admin/courses"
				})
			}).catch(err => {
				console.log("Error")
			})
	}
	removeTeacher = (e, teacherId) => {
		e.preventDefault()
		let index = this.state.data.teachers.findIndex(el => el._id === teacherId)
		let teachersArr = this.state.data.teachers
		teachersArr.splice(index, 1)
		let data = this.state.data
		data.teachers = teachersArr
		this.setState({data})
	}
	toggleTeacherDropdown = (e) => {
		e.preventDefault()
		axios.get(`${process.env.REACT_APP_API_PORT}/teachers`)
			.then(res => {
				const allTeachers = res.data
				this.setState({
					dropdownOpen: !this.state.dropdownOpen,
					allTeachers: allTeachers
				})
			}).catch(err => {
				console.log("Error")
			})
	}
	selectTeacher = (e, teacher) => {
		e.preventDefault()
		console.log('teacher info', teacher)
		let data = this.state.data
		data.teachers.push(teacher)
		this.setState(data)
		console.log('teacher id', teacher._id)
	}
  render() {
    return (
      <>
        <DetailsHeader title={this.state.data.name} subtitle={this.state.data.subject} info={this.state.data.description} />
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
		                      <h3 className="mb-0">COURSE INFORMATION</h3>
		                    </Col>
												{
													this.renderEditButton()
												}
		                  </Row>
		                </CardHeader>
		                <CardBody>
		                  <div className="pl-lg-4">
												<h6 className="heading-small text-muted mb-4">General information</h6>
		                    <Row className="mb-3">
		                      <Col lg="6">
														{/* Name */}
		                        <div className="pl-lg-4">
															<small className="form-control-label">Course name</small>
															<h1>{this.state.data.name}</h1>
		                        </div>
		                      </Col>
		                      <Col lg="6">
														{/* Subject */}
														<div className="pl-lg-4">
															<small className="form-control-label">Subject</small>
															<h1>{this.state.data.subject}</h1>
		                        </div>
		                      </Col>
		                    </Row>
												{/* Description */}
												<Row>
													<Col lg="6">
														<div className="pl-lg-4">
															<small className="form-control-label">Description</small>
															<h2>{this.state.data.description}</h2>
					                  </div>
													</Col>
												</Row>
		                  </div>
											<hr className="my-4" />
		                  {/* Schedule */}
											<div className="pl-lg-4">
			                  <h6 className="heading-small text-muted mb-4">Schedule</h6>
												<Row>
													<Col>
														<div className="pl-lg-4">
															<small className="form-control-label">Hours</small>
															<h2>{this.state.data.schedule.startTime} - {this.state.data.schedule.endTime}</h2>
					                  </div>
													</Col>
													<Col>
														<div className="pl-lg-4">
															<small className="form-control-label">Days of week</small>
																{
																	this.state.data.schedule.days.map((day, key) => <h2 key={key}>{day}</h2>)
																}
					                  </div>
													</Col>
													<Col>
														<div className="pl-lg-4">
															<small className="form-control-label">Dates</small>
															<h2>{this.state.data.schedule.startDate} - {this.state.data.schedule.endDate}</h2>
					                  </div>
													</Col>
												</Row>
											</div>

											<hr className="my-4" />
		                  {/* Registration */}
											<div className="pl-lg-4">
												<h6 className="heading-small text-muted mb-4">Registration</h6>
												<Row>
													<Col lg="4">
														<div className="pl-lg-4">
															<small className="form-control-label">Registration limit</small>
															<h2>{this.state.data.registration.limit}</h2>
														</div>
													</Col>
													<Col lg="4">
														<div className="pl-lg-4">
															<small className="form-control-label">Currently registered</small>
															<h2>{this.state.data.students.length}</h2>
														</div>
													</Col>
													<Col lg="4">
														<div className="pl-lg-4">
															<small className="form-control-label">Availability</small>
															<h2>{Math.round(100 - (this.state.data.students.length / this.state.data.registration.limit * 100))}%</h2>
															<Progress
																max={this.state.data.registration.limit}
																value={this.state.data.students.length}
																barClassName="bg-danger"
															/>
														</div>
													</Col>
												</Row>
											</div>

											<hr className="my-4" />
											{/* Price */}
											<div className="pl-lg-4">
												<h6 className="heading-small text-muted mb-4">Price</h6>
												<Row>
													<Col lg="4">
														<div className="pl-lg-4">
															<small className="form-control-label">Price</small>
															<h2>${this.state.data.price}</h2>
														</div>
													</Col>
												</Row>
											</div>
											<hr className="my-4" />
											{/* Teachers */}
											<div className="pl-lg-4">
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>
												<div className="pl-lg-4">
													{
														this.state.data.teachers.map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../teacher/${teacher._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={require("../../assets/img/theme/team-4-800x800.jpg")}
																			/>
																		</span>
																		<span>{teacher.first_name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
											</div>
											<hr className="my-4" />
											{/* Students */}
											<div className="pl-lg-4">
												<h6 className="heading-small text-muted mb-4">
													Students
												</h6>
												<div className="pl-lg-4">
													{
														this.state.data.students.map((student, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../student/${student._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={require("../../assets/img/theme/team-4-800x800.jpg")}
																			/>
																		</span>
																		<span>{student.first_name} {student.last_name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
											</div>
		                </CardBody>
										<CardFooter>
											<Row className="align-items-center">
												<Col xs="8"></Col>
												{
													this.renderEditButton()
												}
											</Row>
											{
												this.renderDeleteButton()
											}
										</CardFooter>
		              </Card>
		            </Col>
								<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
									{
										this.state.data.teachers.map(teacher => {
											return <TeacherCard teacher={teacher} key={teacher._id} />
										})
									}
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
		                      <h3 className="mb-0">COURSE INFORMATION</h3>
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
		                  <Form id="course-edit" onSubmit={this.submitForm}>
		                    <h6 className="heading-small text-muted mb-4">
		                      General information
		                    </h6>
		                    <div className="pl-lg-4">
		                      <Row>
		                        <Col lg="6">
		                          <FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-course-name"
		                            >
		                              Course name
		                            </label>
		                            <Input
		                              className="form-control-alternative"
		                              defaultValue={this.state.data.name}
		                              id="input-course-name"
		                              placeholder={this.state.data.name}
		                              type="text"
																	onChange={e => this.sendInputToState(e, 'name')}
		                            />
		                          </FormGroup>
		                        </Col>
		                        <Col lg="6">
		                          <FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-subject"
		                            >
		                              Subject
		                            </label>
		                            <Input
		                              className="form-control-alternative"
																	defaultValue={this.state.data.subject}
		                              id="input-subject"
		                              placeholder={this.state.data.subject}
		                              type="text"
																	onChange={(e) => this.sendInputToState(e, 'subject')}
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
													<Row>
														<Col>
															<FormGroup>
																<label
		                              className="form-control-label"
		                              htmlFor="input-description"
		                            >
																	Description
																</label>
				                        <Input
				                          className="form-control-alternative"
																	defaultValue={this.state.data.description}
																	id="input-description"
				                          rows="4"
				                          type="textarea"
																	onChange={(e) => this.sendInputToState(e, 'description')}
				                        />
				                      </FormGroup>
														</Col>
													</Row>
		                    </div>

												<Schedule data={this.state.data} sendInputToState={this.sendInputToState} updateDays={this.updateDays} days={this.state.days} />

												<hr className="my-4" />
												<h6 className="heading-small text-muted mb-4">
		                      Registration
		                    </h6>
		                    <div className="pl-lg-4">
													<Row>
														<Col lg="4">
															<FormGroup>
																<label
		                              className="form-control-label"
		                              htmlFor="input-reg-limit"
		                            >
		                              Registration limit
		                            </label>
		                            <Input
		                              className="form-control-alternative"
																	defaultValue={this.state.data.registration.limit}
		                              id="input-reg-limit"
		                              placeholder="# of students"
		                              type="number"
																	onChange={(e) => this.sendInputToState(e, 'limit', 'registration')}
		                            />
															</FormGroup>
														</Col>
														<Col lg="4">
															<div className="pl-lg-4">
																<small className="form-control-label">Currently registered</small>
																<h2>{this.state.data.students.length}</h2>
															</div>
														</Col>
														<Col lg="4">
															<div className="pl-lg-4">
																<small className="form-control-label">Availability</small>
																<h2>{Math.round(100 - (this.state.data.students.length / this.state.data.registration.limit * 100))}%</h2>
																<Progress
																	max={this.state.data.registration.limit}
																	value={this.state.data.students.length}
																	barClassName="bg-danger"
																/>
															</div>
														</Col>
													</Row>
												</div>

												<hr className="my-4" />
												<h6 className="heading-small text-muted mb-4">
													Price
												</h6>
												<div className="pl-lg-4">
													<Row>
														<Col lg="4">
															<FormGroup>
																<label
																	className="form-control-label"
																	htmlFor="input-price"
																>
																	price
																</label>
																<Input
																	className="form-control-alternative"
																	defaultValue={this.state.data.price}
																	id="input-price"
																	placeholder={this.state.data.price}
																	type="number"
																	onChange={(e, stateRef) => this.sendInputToState(e, 'price')}
																/>
															</FormGroup>
														</Col>
													</Row>
												</div>

												<hr className="my-4" />
												{/* Teachers */}
												<h6 className="heading-small text-muted mb-4">
													Teachers
												</h6>

												<Dropdown isOpen={this.state.dropdownOpen} toggle={e => this.toggleTeacherDropdown(e)}>
													<DropdownToggle caret>
														Add teacher
													</DropdownToggle>
													<DropdownMenu>
														{
															this.state.allTeachers.map(teacher => {
																return(
																	<DropdownItem
																		onClick={(e) => this.selectTeacher(e, teacher)}
																		key={teacher._id}
																	>
																		{teacher.first_name} {teacher.last_name}
																	</DropdownItem>
																)
															})
														}
													</DropdownMenu>
												</Dropdown>

												<div className="pl-lg-4">
													{
														this.state.data.teachers.map(teacher => {
															return(
																<div className="avatar-group" key={teacher._id} style={{display: "inline-block", padding: '40px'}}>
																<Button
																	color="danger"
																	href="#pablo"
																	onClick={e => this.removeTeacher(e, teacher._id)}
																	size="sm"
																>
																	remove
																</Button>
																	<Link to={`../teacher/${teacher._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={require("../../assets/img/theme/team-4-800x800.jpg")}
																			/>
																		</span>
																		<span>{teacher.first_name}</span>
																	</Link>
																</div>
															)
														})
													}
												</div>
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Students
		                    </h6>
		                    <div className="pl-lg-4">
												{
														this.state.data.students.map((student, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={`../student/${student._id}`}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={require("../../assets/img/theme/team-4-800x800.jpg")}
																			/>
																		</span>
																		<span>{student.first_name} {student.last_name}</span>
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
											{
												this.renderDeleteButton()
											}
										</CardFooter>
		              </Card>
		            </Col>
								<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
									{
										this.state.data.teachers.map((teacher, key) => {
											return <TeacherCard teacher={teacher} key={key} />
										})
									}
		            </Col>
		          </Row>
		        </Container>
					)
				}


      </>
    );
  }
}

export default CourseInfo;
