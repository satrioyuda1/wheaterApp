import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const dataTable = (props) => {
	const data = props.data;
	console.log(props.array);
	return (
		<div style={{ paddingBottom: '50px' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }}>
				<Button onClick={props.handleAdd} variant='contained' color='primary'>
					Tambah Data
				</Button>
				<Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
					<Button variant='contained' color='secondary'>
						Back To Home
					</Button>
				</Link>
			</div>
			<TableContainer component={Paper}>
				<Table size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>Date</TableCell>
							<TableCell align='left'>Time</TableCell>
							<TableCell align='left'>Temp</TableCell>
							<TableCell align='left'>Ph</TableCell>
							<TableCell align='left'>Moisture</TableCell>
							<TableCell align='left'>Conditions</TableCell>
							<TableCell align='left'>Actions</TableCell>
						</TableRow>
					</TableHead>
					{props.editing ? (
						<TableBody>
							<TableRow key={props.array}>
								<TableCell align='left'>{props.array}</TableCell>
								<TableCell align='left'>
									<TextField
										name='date'
										value={props.date}
										onChange={props.onChange}
										id='standard-basic'
										label='date'
										type='date'
										fullWidth
										style={{ marginBottom: '30px' }}
										InputLabelProps={{
											shrink: true
										}}
									/>
								</TableCell>
								<TableCell align='left'>
									<TextField
										name='time'
										value={props.time}
										onChange={props.onChange}
										id='standard-basic'
										label='time'
										type='time'
										fullWidth
										style={{ marginBottom: '30px' }}
										InputLabelProps={{
											shrink: true
										}}
									/>
								</TableCell>
								<TableCell align='left'>
									<TextField
										name='temp'
										value={props.temp}
										onChange={props.onChange}
										id='standard-basic'
										label='temp'
										fullWidth
										style={{ marginBottom: '30px' }}
									/>
								</TableCell>
								<TableCell align='left'>
									<TextField
										name='ph'
										value={props.ph}
										onChange={props.onChange}
										id='standard-basic'
										label='ph'
										fullWidth
										style={{ marginBottom: '30px' }}
									/>
								</TableCell>
								<TableCell align='left'>
									<TextField
										name='moisture'
										value={props.moisture}
										onChange={props.onChange}
										id='standard-basic'
										label='moisture'
										fullWidth
										style={{ marginBottom: '30px' }}
									/>
								</TableCell>
								<TableCell align='left'>
									<TextField
										name='conditions'
										value={props.conditions}
										onChange={props.onChange}
										id='standard-basic'
										label='conditions'
										fullWidth
										style={{ marginBottom: '30px' }}
									/>
								</TableCell>
								<TableCell align='left'>
									<Button
										variant='contained'
										color='primary'
										size='small'
										onClick={props.handleUpdateData}>
										Update
									</Button>
									<Button
										variant='contained'
										color='secondary'
										size='small'
										onClick={props.cancelEdit}>
										Cancel
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					) : (
						<TableBody>
							{data.map((row) => (
								<TableRow key={row.id}>
									<TableCell align='right'>{row.id}</TableCell>
									<TableCell component='th' scope='row'>
										{row.date.toLocaleString()}
									</TableCell>
									<TableCell align='right'>{row.time}</TableCell>
									<TableCell align='right'>{row.temp}</TableCell>
									<TableCell align='right'>{row.ph}</TableCell>
									<TableCell align='right'>{row.moisture}</TableCell>
									<TableCell align='right'>{row.conditions}</TableCell>
									<TableCell align='right'>
										<Button
											variant='contained'
											color='primary'
											size='small'
											onClick={() => props.setEditing(row.id)}>
											Edit
										</Button>
										<Button
											variant='contained'
											color='secondary'
											size='small'
											onClick={() => props.deleteData(row.id)}>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					)}
				</Table>
			</TableContainer>
		</div>
	);
};

export default dataTable;
