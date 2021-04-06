import React from 'react';

const Timer = ({ time, type }) => {
	return (
		<div className='time-container'>
			<div className='card-box'>
				<div className='card'>
					<div className='time'>{time < 10 ? `0${time}` : time}</div>
				</div>
			</div>
			<div className='card-name'>
				{type}
			</div>
		</div>
	)
};

export default Timer;
