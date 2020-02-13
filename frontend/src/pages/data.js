import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Table from '../components/table';
import FormAdd from '../components/formAdd';
import axios from 'axios';
export default class data extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			add: false,
			date: '',
			time: '',
			temp: '',
			ph: '',
			moisture: '',
			conditions: '',
			editing: false,
			array: null
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleAdd = () => {
		this.setState({ add: true });
	};
	handleAddData = (add) => {
		// let date = new Date(this.state.date);
		// let set = date.setDate(date.getDate() + 1);
		const data = {
			date: this.state.date,
			time: this.state.time,
			temp: this.state.temp,
			ph: this.state.ph,
			moisture: this.state.moisture,
			conditions: this.state.conditions
		};
		add.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:5000/api/v1/wheater',
			data
		})
			.then((res) => {
				window.location.href = 'http://localhost:3000/data';
			})
			.catch((err) => {
				console.log(err);
			});
	};
	handleCancelAdd = () => {
		this.setState({ add: false });
	};
	handleDeleteData = (id) => {
		console.log(this.state.data);
		console.log(id);
		axios({
			method: 'delete',
			url: `http://localhost:5000/api/v1/wheater/${id}`
		})
			.then((res) => {
				window.location.href = 'http://localhost:3000/data';
			})
			.catch((err) => {
				console.log(err);
			});
		// window.location.href = 'http://localhost:3000/';
	};
	setEditing = (id) => {
		const data = this.state.data;
		console.log(id);
		data.map((row) => {
			if (row.id === id) {
				this.setState({
					date: row.date,
					time: row.time,
					temp: row.temp,
					ph: row.ph,
					moisture: row.moisture,
					conditions: row.conditions
				});
			}
		});
		this.setState({
			editing: true,
			array: id
		});
	};
	cancelEdit = () => {
		this.setState({
			editing: false,
			array: null
		});
		console.log(this.state.editing);
		console.log(this.state.array);
	};
	handleUpdateData = (update) => {
		let id = this.state.array;
		const data = {
			date: this.state.date,
			time: this.state.time,
			temp: this.state.temp,
			ph: this.state.ph,
			moisture: this.state.moisture,
			conditions: this.state.conditions
		};
		update.preventDefault();
		axios({
			method: 'put',
			url: `http://localhost:5000/api/v1/wheater/${id}`,
			data
		})
			.then((res) => {
				window.location.href = 'http://localhost:3000/data';
			})
			.catch((err) => {
				console.log(err);
			});
	};
	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:5000/api/v1/wheaters'
		})
			.then((result) => {
				// console.log(result.data.response[0]);
				this.setState({ data: result.data.response });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		console.log(this.state.data);
		console.log(this.state.date);
		return (
			<div>
				<Container maxWidth='md'>
					<h1>Wheater App</h1>
					{this.state.add ? (
						<FormAdd
							date={this.state.date}
							time={this.state.time}
							temp={this.state.temp}
							ph={this.state.ph}
							moisture={this.state.moisture}
							conditions={this.state.conditions}
							onChange={this.onChange}
							cancel={this.handleCancelAdd}
							addData={this.handleAddData}
						/>
					) : (
						<Table
							date={this.state.date}
							time={this.state.time}
							temp={this.state.temp}
							ph={this.state.ph}
							moisture={this.state.moisture}
							conditions={this.state.conditions}
							handleAdd={this.handleAdd}
							editing={this.state.editing}
							deleteData={this.handleDeleteData}
							data={this.state.data}
							array={this.state.array}
							setEditing={this.setEditing}
							cancelEdit={this.cancelEdit}
							handleUpdateData={this.handleUpdateData}
							onChange={this.onChange}
						/>
					)}
				</Container>
			</div>
		);
	}
}
