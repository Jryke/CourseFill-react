import React from 'react'

class TableHead extends React.Component {
	render() {
		return(
			<tr>
				{
					this.props.columns.map((name, key) => {
						return <th scope="col" key={key}>{name}</th>
					})
				}
			</tr>
		)
	}
}

export default TableHead
