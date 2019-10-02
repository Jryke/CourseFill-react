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
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";
import TableHead from "./TableHead.jsx"
import CoursesTable from "./CoursesTable.jsx"
import SubjectsTable from "./SubjectsTable.jsx"
import TeachersTable from "./TeachersTable.jsx"
import StudentsTable from "./StudentsTable.jsx"

class Tables extends React.Component {
	state = {
		courses: [
			{
				img: {
					href: "#pablo",
					alt: "...",
					src: require("../../assets/img/theme/bootstrap.jpg")
				},
				name: "English 1",
				subject: "English",
				shortDescription: "First level of English.  Prepares students for English 2.",
				fullDescription: "",
				teachers: [
					{
						name: "Zach",
						href: "#pablo",
						id: "tooltip742438047",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-1-800x800.jpg")
						}
					}
				],
				registration: {
					limit: 20,
					registered: 12
				},
				schedule: "pending",
				price: 350,
			},
			{
				img: {
					href: "#pablo",
					alt: "...",
					src: require("../../assets/img/theme/angular.jpg")
				},
				name: "Spanish 1",
				subject: "Spanish",
				shortDescription: "First level of Spanish.  Prepares students for Spanish 2",
				fullDescription: "",
				teachers: [
					{
						name: "Aaron",
						href: "#pablo",
						id: "tooltip804044742",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-3-800x800.jpg")
						}
					}
				],
				registration: {
					limit: 20,
					registered: 5
				},
				schedule: "",
				price: 300,
			},
			{
				img: {
					href: "#pablo",
					alt: "...",
					src: require("../../assets/img/theme/vue.jpg")
				},
				name: "English 3",
				subject: "English",
				shortDescription: "Third level of English.  Prepares student for intermediate level English.",
				fullDescription: "",
				teachers: [
					{
						name: "Mary",
						href: "#pablo",
						id: "tooltip941738690",
						img: {
							alt: "...",
							src: require("../../assets/img/theme/team-2-800x800.jpg")
						}
					}
				],
				registration: {
					limit: 20,
					registered: 15
				},
				schedule: "",
				price: 500,
			}
		],
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
		],
		teachers: [
			{
				name: "The Jesus",
				href: "#pablo",
				id: "tooltip804044742",
				img: {
					alt: "...",
					src: require("../../assets/img/theme/team-3-800x800.jpg")
				},
				courses: [
					{
						name:"Bowling",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"Throwing Strikes",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"Fashion Style",
						subject: "Fashion",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				],
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
				courses: [
					{
						name:"Ninjitsu",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"Skateboarding",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"Meditation",
						subject: "Health/Wellbeing",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				],
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
				courses: [
					{
						name:"One Round Knockouts",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"12 Punch combination",
						subject: "Sports",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
						name:"Being The Greatest",
						subject: "Health/Wellbeing",
						description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				],
				students: ["Tyson","Mayweather", "Butterbean", "Holyfield"]
			}
		]
	}
	renderCardHeader = () => {
		let headerText = this.props.location.pathname.match("[^/]+$")[0]
		headerText = headerText[0].toUpperCase() + headerText.substring(1)
		return headerText
	}
	makeTableHeadProps = () => {
		if (this.props.location.pathname === "/admin/courses") {
			return ["Course", "Subject", "Description", "Teachers", "Registration", "Schedule", "Price", "Action"]
		} else if (this.props.location.pathname === "/admin/subjects") {
			return ["Subject", "Course", "Description", "Teachers", "Registration", "Schedule", "Price", "Action"]
		} else if (this.props.location.pathname === "/admin/teachers") {
			return ["Teacher", "Courses", "Subject", "Students", "Schedule", "Action"]
		} else if (this.props.location.pathname === "/admin/students") {
			return ["Student", "Courses", "Teachers", "Schedule", "Action"]
		} else if (this.props.location.pathname === "/student/courses") {
			return ["Course", "Subject", "Description", "Teachers", "Registration", "Schedule", "Price", "Action"]
		} else if (this.props.location.pathname === "/student/subjects") {
			return ["Subject", "Course", "Description", "Teachers", "Registration", "Schedule", "Price", "Action"]
		} else if (this.props.location.pathname === "/student/teachers") {
			return ["Teacher", "Course", "Subject", "Schedule", "Action"]
		}
	}
	renderTableData = () => {
		if (this.props.location.pathname === "/admin/courses" || this.props.location.pathname === "/student/courses") {
			return <CoursesTable courses={this.state.courses} {...this.props} />
		} else if (this.props.location.pathname === "/admin/subjects" || this.props.location.pathname === "/student/subjects") {
			return <SubjectsTable courses={this.state.courses} {...this.props} />
		} else if (this.props.location.pathname === "/admin/teachers" || this.props.location.pathname === "/student/teachers") {
			return <TeachersTable teachers={this.state.teachers} {...this.props} />
		} else if (this.props.location.pathname === "/admin/students") {
			return <StudentsTable students={this.state.students}  {...this.props} />
		}
	}
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">{this.renderCardHeader()}</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
 										<TableHead
											columns={this.makeTableHeadProps()}
										/>
                   </thead>
                  <tbody>
										{
											this.renderTableData()
										}
                  </tbody>
                </Table>
								<CardFooter className="py-4">
									<nav aria-label="...">
										<Pagination
											className="pagination justify-content-end mb-0"
											listClassName="justify-content-end mb-0"
										>
											<PaginationItem className="disabled">
												<PaginationLink
													href="#pablo"
													onClick={e => e.preventDefault()}
													tabIndex="-1"
												>
													<i className="fas fa-angle-left" />
													<span className="sr-only">Previous</span>
												</PaginationLink>
											</PaginationItem>
											<PaginationItem className="active">
												<PaginationLink
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													1
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													2 <span className="sr-only">(current)</span>
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													3
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													<i className="fas fa-angle-right" />
													<span className="sr-only">Next</span>
												</PaginationLink>
											</PaginationItem>
										</Pagination>
									</nav>
								</CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
