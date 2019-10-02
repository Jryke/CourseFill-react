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
import ClassHeader from "../../components/Headers/ClassHeader.jsx";
import Schedule from "./Schedule.jsx";

class ClassInfo extends React.Component {
	state = {
		students: [
			{
				name: "John",
				href: "#pablo",
				id: "tooltip804044742",
				img: {
					alt: "...",
					src: require("../../assets/img/theme/team-3-800x800.jpg")
				},
				teachers: [
					{
						name: "The Jesus",
						href: "#pablo",
						id: "tooltip804044742",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-3-800x800.jpg")
						},
						courses: ["Bowling", "Throwing Strikes", "Fashion Style"],
						students: ["The Dude", "Walter", "Donnie"]
					},
					{
						name: "Splinter",
						href: "#pablo",
						id: "tooltip742438047",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-2-800x800.jpg")
						},
						courses: ["Ninjitsu", "Skateboarding", "Meditation"],
						students: ["Leonardo","Donatello", "Michaelangelo", "Raphael"]
					}
				],
				courses: [
					"Spanish 1",
					"Spanish 2"
				]
			},
			{
				name: "Chris",
				href: "#pablo",
				id: "tooltip941738690",
				img: {
					alt: "...",
					src: require("../../assets/img/theme/team-1-800x800.jpg")
				},
				teachers: [
					{
						name: "Ali",
						href: "#pablo",
						id: "tooltip941738690",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-1-800x800.jpg")
						},
						courses: ["One Round Knockouts", "12 Punch combination", "Being The Greatest"],
						students: ["Tyson","Mayweather", "Butterbean", "Holyfield"]
					}
				],
				courses: [
					"English 1",
					"English 2"
				]
			},
			{
				name: "Sarah",
				href: "#pablo",
				id: "tooltip742438047",
				img: {
					alt: "...",
					src: require("../../assets/img/theme/team-2-800x800.jpg")
				},
				teachers: [
					{
						name: "Splinter",
						href: "#pablo",
						id: "tooltip742438047",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-2-800x800.jpg")
						},
						courses: ["Ninjitsu", "Skateboarding", "Meditation"],
						students: ["Leonardo","Donatello", "Michaelangelo", "Raphael"]
					},
					{
						name: "Ali",
						href: "#pablo",
						id: "tooltip941738690",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-1-800x800.jpg")
						},
						courses: ["One Round Knockouts", "12 Punch combination", "Being The Greatest"],
						students: ["Tyson","Mayweather", "Butterbean", "Holyfield"]
					}
				],
				courses: [
					"Mandarin 3"
				]
			}
		]
	}

	componentDidMount() {
	axios.get(`${process.env.REACT_APP_API_PORT}/courses/:id`)
			.then(res => {
					const data = res.data;
					console.log(data)
					this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
}

  render() {
    return (
      <>
        <ClassHeader {...this.props}/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
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
                        Settings
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
                              defaultValue="Course name"
                              id="input-course-name"
                              placeholder="Course name"
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
                              id="input-subject"
                              placeholder="Course subject"
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
		                          placeholder="A few words about the class ..."
		                          rows="4"
		                          type="textarea"
		                        />
		                      </FormGroup>
												</Col>
											</Row>
                    </div>

										<Schedule />

										<hr className="my-4" />
                    {/* Students */}
                    <h6 className="heading-small text-muted mb-4">
                      Students
                    </h6>
                    <div className="pl-lg-4">
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
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ClassInfo;
