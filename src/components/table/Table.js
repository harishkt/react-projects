import React, { Component } from 'react';

class Table extends Component {
	constructor(props) {
		super(props);
		this.getBody = this.getBody.bind(this);
	}

	getBody() {
		return (
			<tbody>
			{this.props.data.map((item) =>
				<tr key={item.objectID}>
					<td className='col-md-6'>{item.title}</td>
					<td>{item.author}</td>
					<td>{item.url}</td>
					<td>{item.num_comments}</td>
				</tr>
			)}
			</tbody>
		);
	}
	render() {
		const list = this.getBody();
		return(
			<div className='container'>
				<table className='table table-fixed'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Link</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody>
					{list}
					</tbody>
				</table>
			</div>
		);
	}
}
/**/
export default Table;