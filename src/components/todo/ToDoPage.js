import React, { Component } from 'react';
const initList  = ["Push daily to Github", "Develop at least 10-15 React Apps ", "Learn more about WebPack, babel and Jest", "Learn about Redux", "Implement Redux in existing Apps - Learn it organically", "Deploy Projects through Heroku", "Dockerize All projects", "Learn Fucking CSS", "Implement a game in React", "Port all the existing projects to React Native", "Integrate Some projects through Express", "Learn Server/Client Rendering", "Learn SEO", "Learn Performance Optimization"];

const ToDoHeader = () => {
	return(
		<div>
			<h1>TODO APP</h1>
			<p>Built using React</p>
		</div>
	)
}
const AddItem = ({ onChange, onAdd, value }) => {
	return(
		<div>
			<input
				type='text'
				onChange={onChange}
				value={value}
			/>
			<button
				type='button'
				onClick={onAdd}
			> Add </button>

		</div>
	);
}

const FilterBox = ({ handleFilter }) => {
	return(
		<div>
			<label>
				Filter List:
			</label>
			<input
				type='text'
				value=''
				onChange={handleFilter}
			/>
		</div>
	);
}

const TodoList = ({ list, handleRemove }) => {
	const data = list.map((item, index) => {
		return(
			<tr key={index.toString()}>
				<td>{index + 1}</td>
				<td>{item}</td>
				<td>
					<button
						type='button'
						onClick={(event) => handleRemove(item, event)}
					>
						Remove
					</button>
				</td>
			</tr>
		);
	});
	return(
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Task</th>
					<th>(X)</th>
				</tr>
			</thead>
			<tbody>
			{data}
			</tbody>
		</table>
	);
}
const ResetList = ({ handleClear, handleReset }) => {
	return(
		<span>
			<button
				type='button'
				onClick={handleClear}
			>
				Clear List
			</button>
			<button
				type='button'
				onClick={handleReset}
			>
				Reset List
			</button>
		</span>
	);
}

class ToDoBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			list: [],
		}
		this.handleRemove = this.handleRemove.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.onAddItem = this.onAddItem.bind(this);
		this.onChangeItemText= this.onChangeItemText.bind(this);
	}
	handleRemove(item, event) {
		console.log(`Deleted item is ${item}`);
		event.preventDefault();
	}
	handleReset(event) {
		this.setState({
			list: initList
		});
		event.preventDefault();
	}
	handleClear(event) {
		this.setState({
			list: []
		});
		event.preventDefault();
	}
	onAddItem(event) {
		const { value: initValue } = this.state;
		this.setState((prevState) => ({
			list: [...prevState.list, initValue],
			value: ''
		}));
		event.preventDefault();
	}
	onChangeItemText(event) {
		this.setState({
			value: event.target.value
		})
	}
	componentDidMount() {
		this.setState({
			list: initList
		})
	}
	render() {
		const { value, list } = this.state;
		return(
			<div>
				<AddItem
					onAdd={this.onAddItem}
					onChange={this.onChangeItemText}
					value={value}
				/>
				<FilterBox />
				<TodoList list={list} handleRemove={this.handleRemove}/>
				<ResetList
					handleReset={this.handleReset}
					handleClear={this.handleClear}
				/>
			</div>
		)
	}
}
export default class ToDoPage extends Component {
	render(){
		return(
			<div className='container'>
				<ToDoHeader />
				<ToDoBody />
			</div>
		);
	}
}
