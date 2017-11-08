import React, { Component } from 'react';
import Search from '../searchpanel/Search';
import Table from '../table/Table';

const BASE_URL = 'https://hn.algolia.com';
const SEARCH_API_PATH = '/api/v1/search?query=';
const DEFAULT_SEARCH_TERM = 'nodejs';

class HackerNews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: DEFAULT_SEARCH_TERM,
			results: []
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onChange(event) {
		this.setState({ value: event.target.value})
	}
	onClick(event) {
		const { value } = this.state;
		this.getStoriesBySearchId(value);
		event.preventDefault();
	}
	setStories({ hits }) {
		this.setState({
			results: hits
		});
	}
	getStoriesBySearchId(searchTerm) {
		fetch(`${BASE_URL}${SEARCH_API_PATH}${searchTerm}`)
			.then(response => response.json())
			.then(result => this.setStories(result))
			.catch(e => e);
	}
	componentDidMount() {
		const searchTerm = this.state.value;
		this.getStoriesBySearchId(searchTerm)
	}
	render() {
		const results = this.state.results;
		return(
			<div className='jumbotron'>
				<Search
					onChange={this.onChange}
					onClick={this.onClick}
					value={this.state.value}
				/>
				<Table data={results} />
			</div>
		)
	}
}

export default HackerNews;