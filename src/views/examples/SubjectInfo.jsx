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
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from 'react-router-dom'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"

class Profile extends React.Component {
	renderEditButton = () => {
		let subjectName = this.props.match.params.subject
		if (this.props.location.pathname === `/admin/subject/${subjectName}`) {
			return(
				<Col className="text-right" xs="4">
					<Button
						color="primary"
						href="#pablo"
						onClick={e => {
							e.preventDefault()
							this.props.history.push({
								pathname: `/admin/subject-edit/${subjectName}`,
							})
						}}
						size="sm"
					>
						Edit subject info
					</Button>
				</Col>
			)
		}
	}
  render() {
    return (
      <>
        <DetailsHeader title={"Subject Name"} info={"Subject Information"} />
        {/* Page content */}
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
                      Subject information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
													<div>
														<small className="form-control-label">Subject name</small>
														<h1>*English*</h1>
	                        </div>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Additional information</h6>
											<div className="pl-lg-4">
												<small className="form-control-label">Information</small>
												<h2>*Subject information goes here.  Anything that the teachers and students need to know about the subject can be added.  This is just to fill space until data is received.*</h2>
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
