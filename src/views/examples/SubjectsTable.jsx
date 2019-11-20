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
  Progress,
  // UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom"
// core components

class SubjectsTable extends React.Component {
	orderList = () => {
		let orderedList = this.props.courses.sort((a,b) => {
			var subjA = a.subject.toUpperCase()
			var subjB = b.subject.toUpperCase()
			return subjA < subjB ? -1 : subjA > subjB ? 1 : 0
		})
		return orderedList
	}
	addToCart = (courseName, price) => {
		let cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart')) : []
		let data = {name: courseName, price: price}
		cart.push(data)
		localStorage.setItem('cart', JSON.stringify(cart))
	}
	addToCartAndCheckout = (courseName, price) => {
		let cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart')) : []
		let data = {name: courseName, price: price}
		cart.push(data)
		localStorage.setItem('cart', JSON.stringify(cart))
		this.props.history.push({
			pathname: "/auth/cart",
		})
	}
	renderRegistration = (course) => {
		if (this.props.location.pathname === "/admin/subjects") {
			return (
				<td>
					<Link to={`subject/${course.subject}`}>
						<div className="d-flex align-items-center">
							<span className="mr-2">{`${course.registration.registered / course.registration.limit * 100}%`}</span>
							<div>
								<Progress
									max={course.registration.limit}
									value={course.registration.registered}
									barClassName="bg-danger"
								/>
							</div>
						</div>
					</Link>
				</td>
			)
		}
	}
	renderDropdown = (course) => {
		if (this.props.location.pathname === "/student/subjects") {
			return(
				<td className="text-left">
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
								onClick={() => this.addToCart(course.name, course.price)}
							>
								Add to cart
							</DropdownItem>
							<DropdownItem
								onClick={() => this.addToCartAndCheckout(course.name, course.price)}
							>
								Add to cart and register
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</td>
			)
		}
	}
  render() {
    return (
			<>
				{
					this.orderList().map((course, key) => {
						return(
							<tr key={key}>
								<td>
									<Link to={`subject/${course.subject}`}>
										{course.subject}
									</Link>
								</td>

								<td>
									<Link to={`course/${course.name}`}>
										{course.name}
									</Link>
								</td>

								<td>
									{
										course.teachers.map((teacher, key) => {
											return(
												<div className="avatar-group" key={key}>
													<Link to={`teacher/${teacher.name}`}>
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
								</td>

								{
									this.renderRegistration(course)
								}

								<td>
									<Link to={`subject/${course.subject}`}>
										<Badge color="" className="badge-dot mr-4">
											<i className="bg-warning" />
											pending
										</Badge>
									</Link>
								</td>

								<td>
									<Link to={`subject/${course.subject}`}>
										${course.price}
									</Link>
								</td>
								{
									this.renderDropdown(course)
								}
							</tr>
						)
					})
				}
			</>
    );
  }
}

export default SubjectsTable;
