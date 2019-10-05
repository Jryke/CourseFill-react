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
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"

class SubjectInfo extends React.Component {
	state = {
		editable: false,
		data: {
			name: 'English',
			description: 'This subject is for ESL students of all levels.  The curriculum starts at English 101 and goes up to the most advanced level of English 510.  Level exam can be completed for non-beginners to determine the proper level.'
		}
	}
	renderEditButton = () => {
		let subjectId = this.props.match.params.id
		// MAKE THIS IF STATEMENT CHECK THAT USER IS ADMIN (NOT TEACHER OR STUDENT)
		if (this.props.location.pathname === `/admin/subject/${subjectId}`) {
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
	sendInputToState = (e, stateRef, stateObj) => {
		let data = this.state.data
		if (stateObj) {
			data[stateObj][stateRef] = e.target.value
		} else {
			data[stateRef] = e.target.value
		}
		this.setState({data})
	}
	submitUpdates = (e) => {
		e.preventDefault()
		// axios.patch(`${process.env.REACT_APP_API_PORT}/teachers/${this.props.match.params.id}`, this.state.data)
		// 	.then(data => {
					this.setState({
						editable: !this.state.editable
					})
			// }).catch(err => {
			// 	console.log("Error")
			// })
	}
	cancelUpdates = (e) => {
		e.preventDefault()
		// axios.get(`${process.env.REACT_APP_API_PORT}/teacher/${this.props.match.params.id}`)
		// 	.then(res => {
		// 		const data = res.data
				this.setState({
					// data: data,
					editable: !this.state.editable
				})
			// }).catch(err => {
			// 	console.log("Error")
			// })
	}
  render() {
    return (
      <>
        <DetailsHeader title={this.state.data.name} info={this.state.data.description} />
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
		                      <h3 className="mb-0">Subject</h3>
		                    </Col>
												{
													this.renderEditButton()
												}
		                  </Row>
		                </CardHeader>
		                <CardBody>
		                  <Form>
		                    <h6 className="heading-small text-muted mb-4">
		                      General information
		                    </h6>
		                    <div className="pl-lg-4">
		                      <Row>
		                        <Col lg="6">
															<div>
																<small className="form-control-label">Subject name</small>
																<h1>{this.state.data.name}</h1>
			                        </div>
		                        </Col>
		                      </Row>
		                    </div>
		                    <hr className="my-4" />
		                    {/* Description */}
		                    <h6 className="heading-small text-muted mb-4">Additional information</h6>
													<div className="pl-lg-4">
														<small className="form-control-label">Information</small>
														<h2>
															{this.state.data.description}
														</h2>
				                  </div>
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Teachers of this subject
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
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses in this subject
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
		                      <h3 className="mb-0">Subject</h3>
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
		                        <Col lg="6">
		                          <FormGroup>
		                            <label
		                              className="form-control-label"
		                              htmlFor="input-subject-name"
		                            >
		                              Subject name
		                            </label>
		                            <Input
		                              className="form-control-alternative"
		                              defaultValue={this.state.data.name}
		                              id="input-subject-name"
		                              placeholder="Subject name"
		                              type="text"
																	onChange={e => this.sendInputToState(e, "name")}
		                            />
		                          </FormGroup>
		                        </Col>
		                      </Row>
		                    </div>
		                    <hr className="my-4" />
		                    {/* Description */}
		                    <h6 className="heading-small text-muted mb-4">Additional information</h6>
		                    <div className="pl-lg-4">
		                      <FormGroup>
		                        <label>Information</label>
		                        <Input
		                          className="form-control-alternative"
		                          placeholder="Use this space to write any information about this subject"
		                          rows="4"
		                          defaultValue={this.state.data.description}
		                          type="textarea"
															onChange={e => this.sendInputToState(e, "description")}
		                        />
		                      </FormGroup>
		                    </div>
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Teachers of this subject
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
												<hr className="my-4" />
		                    {/* Students */}
		                    <h6 className="heading-small text-muted mb-4">
		                      Courses in this subject
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

export default SubjectInfo;
