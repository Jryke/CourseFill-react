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
import { Link } from "react-router-dom"
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"
import Schedule from "./Schedule.jsx";

class ClassInfo extends React.Component {
	state = {
		data: {
			schedule: {
				days: []
			},
			students: [],
			teachers: []
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
  render() {
		console.log(this.state.data.description)
    return (
      <>
        <DetailsHeader title={this.state.data.name} subtitle={this.state.data.subject} info={this.state.data.description} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1 mb-6" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Course Name</h3>
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
                      Course information
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
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Class Description</h6>
                    <div className="pl-lg-4">
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
                              id="input-reg-limit"
                              placeholder="# of students"
                              type="number"
                            />
													</FormGroup>
												</Col>
												<Col lg="4">
													<div className="pl-lg-4">
														<small className="form-control-label">Currently registered</small>
														<h2>*# of registered students*</h2>
				                  </div>
												</Col>
												<Col lg="4">
													<FormGroup>
														<label
                              className="form-control-label"
                              htmlFor="input-cost"
                            >
                              Cost
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-cost"
                              placeholder="$"
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
      </>
    );
  }
}

export default ClassInfo;
