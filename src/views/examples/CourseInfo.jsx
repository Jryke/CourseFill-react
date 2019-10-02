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
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"

class ClassInfo extends React.Component {
	state = {
		data: ''
	}

	renderEditButton = () => {
		let courseName = this.props.match.params.course
		if (this.props.location.pathname === `/admin/course/${courseName}`) {
			return(
				<Col className="text-right" xs="4">
					<Button
						color="primary"
						href="#pablo"
						onClick={e => {
							e.preventDefault()
							this.props.history.push({
								pathname: `/admin/course-edit/${courseName}`,
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

	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/courses/5d9327187f0e99bef3e00aef`)
				.then(res => {
						const data = res.data
						this.setState({data: data})
						console.log(data)
				}).catch(err => {
					console.log("Error")
				})
	}

  render() {
    return (
      <>

        <DetailsHeader title={"Course Name"} subtitle={"Course Subject"} info={"Course Description"} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1 mb-6" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">{this.state.data.name}</h3>
                    </Col>
										{this.renderEditButton()}

                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="heading-small text-muted mb-4">
                    Course information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <div>
													<small className="form-control-label">Course name</small>
													<h1>*English 101*</h1>
                        </div>
                      </Col>
                      <Col lg="6">
												<div>
													<small className="form-control-label">Subject</small>
													<h1>*English/ESL*</h1>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Class Description</h6>
                  <div className="pl-lg-4">
										<small className="form-control-label">Description</small>
										<h2>*Course descriptions goes here.  Course will prepare students for the next level of English 102.  Students will learn basic vocabulary, phrases and grammar*</h2>
                  </div>
									<hr className="my-4" />
                  {/* Schedule */}
                  <h6 className="heading-small text-muted mb-4">Schedule</h6>
									<Row>
										<Col>
											<div className="pl-lg-4">
												<small className="form-control-label">Hours</small>
												<h2>*9:00am - 9:50am*</h2>
		                  </div>
										</Col>
										<Col>
											<div className="pl-lg-4">
												<small className="form-control-label">Days of week</small>
												<h2>*M/W/F*</h2>
		                  </div>
										</Col>
										<Col>
											<div className="pl-lg-4">
												<small className="form-control-label">Dates</small>
												<h2>*January 5, 2020 - May 18, 2020*</h2>
		                  </div>
										</Col>
									</Row>
									<hr className="my-4" />
									{/* Teachers */}
									<h6 className="heading-small text-muted mb-4">
										Teachers
									</h6>
									<div className="pl-lg-4">
										{/*
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
										*/}
									</div>
									<hr className="my-4" />
									{/* Students */}
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
