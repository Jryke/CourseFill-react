import React from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from "reactstrap";
import { Link } from 'react-router-dom'

class TeacherCard extends React.Component {
	render() {
		return(
			<Link to={`../teacher/${this.props.teacher._id}`}>
				<Card className="card-profile shadow mb-6">
					<Row className="justify-content-center">
						<Col className="order-lg-2" lg="3">
							<div className="card-profile-image">
								<Link to={`../teacher/${this.props.teacher._id}`}>
									<img
										alt="..."
										className="rounded-circle"
										src={require("../../assets/img/theme/team-4-800x800.jpg")}
									/>
								</Link>
							</div>
						</Col>
					</Row>
					<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
					<CardBody className="pt-0 pt-md-4">
						<Row>
							<div className="col">
								<div className="card-profile-stats d-flex justify-content-center mt-md-5">
								</div>
							</div>
						</Row>
						<div className="text-center">
							<h3>
								{`${this.props.teacher.first_name} ${this.props.teacher.last_name}`}
							</h3>
							<div className="h5 mt-4">
								<i className="ni business_briefcase-24 mr-2" />
								{this.props.teacher.email}
							</div>
							<hr className="my-4" />
							<p>
								{this.props.teacher.about}
							</p>
						</div>
					</CardBody>
				</Card>
			</Link>
		)
	}
}

export default TeacherCard
