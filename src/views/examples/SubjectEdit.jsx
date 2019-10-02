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
import { Link } from 'react-router-dom'
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"

class Profile extends React.Component {
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
                      Subject information
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
                              defaultValue="Subject name"
                              id="input-subject-name"
                              placeholder="Subject name"
                              type="text"
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
                          defaultValue="Use this space to write any information about this subject"
                          type="textarea"
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
                      Classes in this subject
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
