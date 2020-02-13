import React from 'react';
import { Grid, Card, CardContent, Typography, Container, TextField, Button } from '@material-ui/core';
const formAdd = (props) => {
	return (
		<div>
			<Container style={{ marginTop: '20px' }}>
				<Grid>
					<Typography
						variant='h4'
						component='h4'
						style={{
							textAlign: 'center',
							justifyContent: 'center'
						}}>
						Tambah Data
					</Typography>
					<Card
						style={{
							display: 'flex',
							backgroundColor: '#fbe9e7',
							marginTop: '20px',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<CardContent>
							<form noValidate autoComplete='off'>
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
								<TextField
									name='temp'
									value={props.temp}
									onChange={props.onChange}
									id='standard-basic'
									label='temp'
									fullWidth
									style={{ marginBottom: '30px' }}
								/>
								<TextField
									name='ph'
									value={props.ph}
									onChange={props.onChange}
									id='standard-basic'
									label='ph'
									fullWidth
									style={{ marginBottom: '30px' }}
								/>
								<TextField
									name='moisture'
									value={props.moisture}
									onChange={props.onChange}
									id='standard-basic'
									label='moisture'
									fullWidth
									style={{ marginBottom: '30px' }}
								/>
								<TextField
									name='conditions'
									value={props.address}
									onChange={props.onChange}
									id='standard-basic'
									label='conditions'
									fullWidth
									style={{ marginBottom: '30px' }}
								/>
								<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
									<Button variant='contained' color='primary' onClick={props.addData}>
										Tambah Data
									</Button>
									<Button variant='contained' color='secondary' onClick={props.cancel}>
										Cancel
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Container>
		</div>
	);
};

export default formAdd;
