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
	Progress
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"
import Schedule from "./Schedule.jsx";

class ClassInfo extends React.Component {
	state = {
		editable: false,
		data: {
			schedule: {
				days: []
			},
			students: [],
			teachers: [],
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
		}
	}
	sendInputToState = (e, stateRef) => {
		let state = this.state
		state[stateRef] = e.target.value
		this.setState({state}, console.log(this.state))
	}
	submitForm = (e) => {
		e.preventDefault()
		// PATCH REQUEST THEN
		console.log('form submitted')
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

		                    <Row>
		                      <Col lg="6">
														{/* Name */}
		                        <div>
															<small className="form-control-label">Course name</small>
															<h1>{this.state.data.name}</h1>
		                        </div>
		                      </Col>
		                      <Col lg="6">
														{/* Subject */}
														<div>
															<small className="form-control-label">Subject</small>
															<h1>{this.state.data.subject}</h1>
		                        </div>
		                      </Col>
		                    </Row>
		                  </div>
		                  {/* Description */}
		                  <div className="pl-lg-4">
												<small className="form-control-label">Description</small>
												<h2>{this.state.data.description}</h2>
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
															<h2>{this.state.data.registration.registered}</h2>
														</div>
													</Col>
													<Col lg="4">
														<div className="pl-lg-4">
															<small className="form-control-label">Availability</small>
															<h2>{100 - (this.state.data.registration.registered / this.state.data.registration.limit * 100)}%</h2>
															<Progress
																max={this.state.data.registration.limit}
																value={this.state.data.registration.registered}
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
																	<Link to={teacher.first_name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.avatar}
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
													{/*
													{
														this.state.students.map((student, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={student.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={student.img.src}
																			/>
																		</span>
																		<span>{student.name}</span>
																	</Link>
																</div>
															)
														})
													}
													*/}
												</div>
											</div>
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
		                      <h3 className="mb-0">COURSE INFORMATION</h3>
		                    </Col>
												<Col className="text-right" xs="4">
		                      <Button
		                        color="default"
		                        href="#pablo"
		                        onClick={e => {
															e.preventDefault()
															this.setState({
																editable: !this.state.editable
															})
															}
														}
		                        size="sm"
		                      >
		                        Cancel changes
		                      </Button>
		                      <Button
		                        color="primary"
		                        form="course-edit"
		                        type="submit"
		                        size="sm"
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
																	onChange={(e, stateRef) => this.sendInputToState(e, 'name')}
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
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
													<Row>
														<Col>
															<FormGroup>
				                        <label>Description</label>
				                        <Input
				                          className="form-control-alternative"
																	defaultValue={this.state.data.description}
				                          rows="4"
				                          type="textarea"
				                        />
				                      </FormGroup>
														</Col>
													</Row>
		                    </div>

												<Schedule data={this.state.data} />

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
		                            />
															</FormGroup>
														</Col>
														<Col lg="4">
															<div className="pl-lg-4">
																<small className="form-control-label">Currently registered</small>
																<h2>{this.state.data.registration.registered}</h2>
															</div>
														</Col>
														<Col lg="4">
															<div className="pl-lg-4">
																<small className="form-control-label">Availability</small>
																<h2>{100 - (this.state.data.registration.registered / this.state.data.registration.limit * 100)}%</h2>
																<Progress
																	max={this.state.data.registration.limit}
																	value={this.state.data.registration.registered}
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
												<div className="pl-lg-4">
													{
														this.state.data.teachers.map((teacher, key) => {
															return(
																<div className="avatar-group" key={key} style={{display: "inline-block", padding: '40px'}}>
																	<Link to={teacher.first_name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={teacher.avatar}
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
																	<Link to={student.name}>
																		<span className="avatar avatar-sm" >
																			<img
																				alt="..."
																				className="rounded-circle"
																				src={student.img.src}
																			/>
																		</span>
																		<span>{student.name}</span>
																	</Link>
																</div>
															)
														})
													}
		                    </div>
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

export default ClassInfo;
