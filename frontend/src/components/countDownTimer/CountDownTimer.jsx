import { useState, useEffect } from 'react';
import { TimeContainer, TimeItem, Colon } from './CountTimerTimer.styles';

const CountDownTimer = () => {
	const [hours, setHours] = useState('-');
	const [minutes, setMinutes] = useState('-');
	const [seconds, setSeconds] = useState('-');

	const zero = '0';
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;
	const currentDay = new Date().getDate();
	const dateToEnd = `${currentMonth} ${currentDay + 2}, 2022 8:00:00`;

	const [endDate, setEndDate] = useState(dateToEnd);
	let countDownDate = new Date(endDate).getTime();

	const countDownFunction = () => {
		setInterval(() => {
			var now = new Date().getTime();
			var timeleft = countDownDate - now;
			const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		}, 1000);
	};

	useEffect(() => {
		countDownFunction();
	}, [minutes, hours]);

	return (
		<TimeContainer>
			<TimeItem>{hours < 10 ? zero : hours.toString().charAt(0)}</TimeItem>
			<TimeItem>{hours >= 10 ? hours.toString().charAt(1) : hours.toString().charAt(0)}</TimeItem>
			<Colon>:</Colon>
			<TimeItem>{minutes < 10 ? zero : minutes.toString().charAt(0)}</TimeItem>
			<TimeItem>{minutes >= 10 ? minutes.toString().charAt(1) : minutes.toString().charAt(0)}</TimeItem>
			<Colon>:</Colon>
			<TimeItem>{seconds < 10 ? zero : seconds.toString().charAt(0)}</TimeItem>
			<TimeItem>{seconds >= 10 ? seconds.toString().charAt(1) : seconds.toString().charAt(0)}</TimeItem>
		</TimeContainer>
	);
};

export default CountDownTimer;
