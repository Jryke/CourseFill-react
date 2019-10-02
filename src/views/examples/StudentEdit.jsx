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
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx";

class Profile extends React.Component {
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
												onClick={e => e.preventDefault()}
												size="sm"
											>
												Save changes
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
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-first-name"
														>
															First name
														</label>
														<Input
															className="form-control-alternative"
															defaultValue="First name"
															id="input-first-name"
															placeholder="First name"
															type="text"
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
															defaultValue="Middle name"
															id="input-middle-name"
															placeholder="Middle name"
															type="text"
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
															defaultValue="Last name"
															id="input-last-name"
															placeholder="Last name"
															type="text"
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
															placeholder="name@example.com"
															type="email"
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
															defaultValue="Tell a little bit about yourself..."
															type="textarea"
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
      </>
    );
  }
}

export default Profile;
