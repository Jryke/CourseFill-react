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
  // Media,
  Progress,
  // UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// core components

class CoursesTable extends React.Component {
	state = {
			data: [
				{
					schedule: {
						days: []
					},
					registration: {
						registered: 0,
						limit: 0
					},
					students: [{}],
					teachers: []
				}
			]
	}
	orderList = () => {
		let orderedList = this.state.data.sort((a,b) => {
			var nameA = a.name.toUpperCase()
			var nameB = b.name.toUpperCase()
			return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
		})
		return orderedList
	}
	redirect = (e, course) => {
		this.props.history.push({
			pathname: `/admin/${course.name}`,
		})
	}

	componentDidMount() {
	axios.get(`${process.env.REACT_APP_API_PORT}/courses`)
			.then(res => {
					const data = res.data;
					this.setState({data: data})
			}).catch(err => {
				console.log("Error")
			})
	}
  render() {
    return (
			<>
				{
					this.orderList().map((course, key) => {
						return(
							<tr key={key}>
									<td>
										<Link to={`course/${course._id}`}>
											{course.name}
										</Link>
									</td>
									<td>
										<Link to={`course/${course._id}`}>
											{course.subject}
										</Link>
									</td>
									<td>
										{
											course.teachers.map((teacher, key) => {
												return(
													<div className="avatar-group" key={key}>
														<Link to={`teacher/${teacher._id}`}>
															<span className="avatar avatar-sm" >
																<img
																	alt="..."
																	className="rounded-circle"
																	src='{teacher.avatar}'
																/>
															</span>
															<span>{teacher.first_name} {teacher.last_name}</span>
														</Link>
													</div>
												)
											})
										}
									</td>

									<td>
										<Link to={`course/${course._id}`}>
											<div className="d-flex align-items-center">
												<span className="mr-2">{`${Math.round(course.students.length / course.registration.limit * 100)}%`}</span>
												<div>
													<Progress
														max={course.registration.limit}
														value={course.students.length}
														barClassName="bg-danger"
													/>
												</div>
											</div>
										</Link>
									</td>

									<td>
										<Link to={`course/${course._id}`}>
											<Badge color="" className="badge-dot mr-4">
												<i className="bg-warning" />
												pending
											</Badge>
										</Link>
									</td>

									<td>
										<Link to={`course/${course._id}`}>
											${course.price}
										</Link>
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

export default CoursesTable;
