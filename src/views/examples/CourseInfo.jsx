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
// core components
import DetailsHeader from "../../components/Headers/DetailsHeader.jsx";
import TeacherCard from "./TeacherCard.jsx"
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
  render() {
		console.log(this.props)
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
                      <h3 className="mb-0">Course Name</h3>
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
										<Row>
											<Col>
												<div>
													<small className="form-control-label">Description</small>
													<h2>*Course descriptions goes here.  Course will prepare students for the next level of English 102.  Students will learn basic vocabulary, phrases and grammar*</h2>
                        </div>
											</Col>
										</Row>
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
