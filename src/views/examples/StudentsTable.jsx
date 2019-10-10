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
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  // UncontrolledTooltip
} from "reactstrap";
import {Link} from "react-router-dom"
import axios from 'axios'
// core components

class StudentsTable extends React.Component {
	state = {
		data: [
			{
				first_name: '',
				middle_name: '',
				last_name: '',
				email: '',
				avatar: '',
				role: '',
				school: '',
				created_at: '',
				courses: [
					{
						schedule: [
							{
								days: [],
								startDate: '',
								endDate: '',
								startTime: '',
								endTime: ''
							}
						],
						teachers: [
							{
								first_name: '',
								last_name: '',
								avatar: '',
								_id: ''
							}
						],
						registration: {
							registered: 0,
							limit: 0
						},
						_id: '',
						name: '',
						subject: ''
					}
				]
			}
		]
	}
	orderList = () => {
		let orderedList = this.state.data.sort((a,b) => {
			var studentA = a.last_name.toUpperCase()
			var studentB = b.last_name.toUpperCase()
			return studentA < studentB ? -1 : studentA > studentB ? 1 : 0
		})
		return orderedList
	}

	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_PORT}/students`)
			.then(res => {
				const data = res.data
				this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
	}
  render() {
    return (
			<>
				{
					this.orderList().map((student, key) => {
						return(
							<tr key={key}>
								<td>
									<Media className="align-items-center">
										<Link
											to={`student/${student._id}`}
											className="avatar rounded-circle mr-3"
										>
											<img
											src={require("../../assets/img/theme/team-4-800x800.jpg")}
											/>
										</Link>
										<Media>
											<span className="mb-0 text-sm">
												<Link to={`student/${student._id}`}>
													{student.first_name} {student.last_name}
												</Link>
											</span>
										</Media>
									</Media>
								</td>
								<td>{
									student.courses.map((course, key) => {
										return(
											<div key={key}>
												<Link to={`course/${course._id}`}>
													{course.name}
												</Link>
											</div>
										)
									})
								}
							</td>
							<td>
								{
									student.courses.map((course, key) => {
										return (
											course.teachers.map((teacher, key) => {
												return(
													<div className="avatar-group" key={key}>
														<Link to={`teacher/${teacher._id}`}>
															<span className="avatar avatar-sm" >
																<img
																	alt="..."
																	className="rounded-circle"
																	src={require("../../assets/img/theme/team-4-800x800.jpg")}
																/>
															</span>
															<span>
																{teacher.first_name} {teacher.last_name}
															</span>
														</Link>
													</div>
												)
											})
										)
									})

								}
							</td>

								<td>
									<Badge color="" className="badge-dot mr-4">
										<i className="bg-warning" />
										pending
									</Badge>
								</td>
								<td className="text-right">
									<UncontrolledDropdown>
										<DropdownToggle
											className="btn-icon-only text-light"
											href="#pablo"
											role="button"
											size="sm"
											color=""
											onClick={e => e.preventDefault()}
										>
											<i className="fas fa-ellipsis-v" />
										</DropdownToggle>
										<DropdownMenu className="dropdown-menu-arrow" right>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Add to cart
											</DropdownItem>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Add to cart and register
											</DropdownItem>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Something else here
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</td>
							</tr>
						)
					})
				}
			</>
    );
  }
}

export default StudentsTable;
