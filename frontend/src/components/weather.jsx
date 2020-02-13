import React from 'react';
import { Typography, SvgIcon } from '@material-ui/core';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

import './weather.css';
import SvgSun from '../icons/Sun';
import SvgPh from '../icons/Ph';
import SvgMoisture from '../icons/Moisture';

const Weather = (props) => {
	return (
		<div>
			<Typography>{props.getWheater.date}</Typography>
			{props.getWheater.conditions === 'berawan' ? <WbCloudyIcon className='iconsWheater' /> : null}
			{props.getWheater.conditions === 'hujan' ? <BeachAccessIcon className='iconsWheater' /> : null}
			{props.getWheater.conditions === 'cerah' ? <BrightnessLowIcon className='iconsWheater' /> : null}
			<Typography>{props.getWheater.conditions}</Typography>
			<Typography>{props.time}</Typography>
			<div className='tempPh'>
				<div className='temp'>
					<SvgIcon component={SvgSun} viewBox='0 0 600 476.6' />
					<Typography className='tempNumber'>{props.getWheater.temp}</Typography>
				</div>
				<div className='ph'>
					<SvgIcon component={SvgPh} viewBox='0 0 600 476.6' />
					<Typography>{props.getWheater.ph}</Typography>
				</div>
			</div>
			<div className='moisture'>
				<SvgIcon component={SvgMoisture} viewBox='0 250 1000 500' />
				<Typography>{props.getWheater.moisture}</Typography>
			</div>
		</div>
	);
};

export default Weather;
