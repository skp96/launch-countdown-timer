import React, { useReducer, useEffect, Fragment } from 'react';
import Timer from './timer';

const CountDown = () => {
	const initialState = {
		days: 8,
		hours: 23,
		minutes: 1,
		seconds: 1
	};

	const reducer = (state, action) => {
		const { days, hours, minutes, seconds } = state;
		if (seconds) {
			return { ...state, seconds: seconds - 1 };
		} else if (minutes) {
			return { ...state, minutes: minutes - 1, seconds: 59 };
		} else if (hours) {
			return { ...state, hours: hours - 1, minutes: 59 };
		} else if (days) {
			return { ...state, days: days - 1, hours: 24 };
		} else {
			return { initialState };
		}
	};

	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { days, hours, minutes, seconds } = state;

	useEffect(() => {
		const countDown = setInterval(() => {
			dispatch();
		}, 1000);
		return () => clearInterval(countDown);
	});

	return (
		<Fragment>
			<Timer time={days} />
			<Timer time={hours} />
			<Timer time={minutes} />
			<Timer time={seconds} />
		</Fragment>
	);
};

export default CountDown;
