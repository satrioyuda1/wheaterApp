import React, { Component } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import './home.css';
import axios from 'axios';
import Weather from '../components/weather';
import { Link } from 'react-router-dom';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wheaterNow: {},
			conditions: ''
		};
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:5000/api/v1/now'
		})
			.then((result) => {
				// console.log(result.data.response[0]);
				this.setState({ wheaterNow: Object.assign({}, this.state.wheaterNow, result.data.response[0]) });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		const today = new Date();
		const time = today.getHours() + ':' + today.getMinutes();
		console.log(this.state.wheaterNow.conditions);
		return (
			<div className='background'>
				<div className='home'>
					<Container maxWidth='md'>
						<Typography>Wheather App</Typography>
						<Weather getWheater={this.state.wheaterNow} time={time} />
						<Link to={'/data'} style={{ textDecoration: 'none', color: 'black' }}>
							<Button variant='contained' color='primary'>
								Data Cuaca
							</Button>
						</Link>
					</Container>
				</div>
			</div>
		);
	}
}

export default Home;
