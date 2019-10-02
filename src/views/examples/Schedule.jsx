import React from 'react'
// reactstrap components
import {
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";
// core components

class Schedule extends React.Component {
	state = {
		days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	}
	changeDate = (date, field) => {
		let dates = this.state.dates
		dates[field] = date
		this.setState({dates})
		this.toggleDisabled()
	}
	render() {
		return (
			<>
				<hr className="my-4" />
				{/* Schedule */}
				<h6 className="heading-small text-muted mb-4">
					Class schedule
				</h6>
				<div className="pl-lg-4">
					<Row>
						<Col lg="6">
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="datepicker-start-date"
								>
									Start date
								</label>
								<Input
									className="form-control-alternative"
									id="input-start-date"
									type="date"
								/>
							</FormGroup>
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="datepicker-end-date"
								>
									End date
								</label>
								<Input
									className="form-control-alternative"
									id="input-end-date"
									type="date"
								/>
							</FormGroup>
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="input-start-time"
								>
									Start time
								</label>
								<Input
									className="form-control-alternative"
									defaultValue="9:00am"
									id="input-start-time"
									placeholder="9:00am"
									type="datetime-local"
								/>
							</FormGroup>
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="input-end-time"
								>
									End time
								</label>
								<Input
									className="form-control-alternative"
									defaultValue="9:50am"
									id="input-end-time"
									placeholder="9:50am"
									type="datetime-local"
								/>
							</FormGroup>
						</Col>
						<Col lg="6">
							<FormGroup>
								<label
									className="form-control-label"
								>
									Days of the week
								</label>
								{
									this.state.days.map((day, key) => {
										return (
											<div className="custom-checkbox" key={key}>
												<label>
													<input type="checkbox" />
													{day}
												</label>
											</div>
										)
									})
								}
							</FormGroup>
						</Col>
					</Row>
				</div>
			</>
		)
	}
}

export default Schedule
