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
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx";

class Profile extends React.Component {
	// renderEditButton = () => {
	// 	let studentName = this.props.match.params.student
	// 	// set this if statement to include if student logged in matches student being viewed
	// 	if (this.props.location.pathname === `/admin/student/${studentName}`) {
	// 		return(
	// 			<Col className="text-right" xs="4">
	// 				<Button
	// 					color="primary"
	// 					href="#pablo"
	// 					onClick={e => {
	// 						e.preventDefault()
	// 						this.props.history.push({
	// 							pathname: `/admin/student-edit/${studentName}`,
	// 						})
	// 					}}
	// 					size="sm"
	// 				>
	// 					Edit student info
	// 				</Button>
	// 			</Col>
	// 		)
	// 	}
	// }
  render() {
    return (
      <>
				<DetailsHeader title={"Student Name"} info={"About Student"} />
				{/* Page content */}
				<Container className="mt--7" fluid>
					<Row>
						<Col className="order-xl-1 mb-6" xl="8">
							<Card className="bg-secondary shadow">
								<CardHeader className="bg-white border-0">
									<Row className="align-items-center">
										<Col xs="8">
											<h3 className="mb-0">Student</h3>
										</Col>
										<Col className="text-right" xs="4">
											<Button
												color="primary"
												href="#pablo"
												onClick={e => {
													e.preventDefault()
													this.props.history.push({
														pathname: `/admin/student-edit/${this.props.match.params.student}`,
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
											Student information
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="4">
													<div>
														<small className="form-control-label">First name</small>
														<h1>*FirstName*</h1>
	                        </div>
												</Col>
												<Col lg="4">
													<div>
														<small className="form-control-label">Middle name</small>
														<h1>*MiddleName*</h1>
	                        </div>
												</Col>
												<Col lg="4">
													<div>
														<small className="form-control-label">Last name</small>
														<h1>*LastName*</h1>
	                        </div>
												</Col>
											</Row>
											<Row>
												<Col lg="6">
													<div>
														<small className="form-control-label">Email address</small>
														<h1>*student@studentmail.com*</h1>
	                        </div>
												</Col>
											</Row>
											<Row>
												<Col md="12">
													<div>
														<small className="form-control-label">About</small>
														<h3>*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*</h3>
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
														<h3>*Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09*</h3>
	                        </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
														<div>
															<small className="form-control-label">City</small>
															<h3>*New York*</h3>
		                        </div>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
													<div>
														<small className="form-control-label">Country</small>
														<h3>*United States*</h3>
													</div>
                        </Col>
                        <Col lg="4">
													<div>
														<small className="form-control-label">Postal code</small>
														<h3>*11345*</h3>
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
      </>
    );
  }
}

export default Profile;
