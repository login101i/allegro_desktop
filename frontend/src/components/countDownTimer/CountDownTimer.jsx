import { useState, useEffect } from 'react';
import { TimeContainer, TimeItem, Colon } from './CountDownTimer.styles';

const CountDownTimer = () => {
	const [hours, setHours] = useState('-');
	const [minutes, setMinutes] = useState('-');
	const [seconds, setSeconds] = useState('-');

	const zero = '0';
	const currentMonth = new Date().getMonth() + 1;
	const currentDay = new Date().getDate();
	const dateToEnd = `${currentMonth} ${currentDay + 1}, 2022 12:00:00`;

	const [endDate, setEndDate] = useState(dateToEnd);
	let countDownDate = new Date(endDate).getTime();

	useEffect(() => {
		countDownFunction();
	}, [minutes, hours]);

	const countDownFunction = () => {
		setInterval(() => {
			var now = new Date().getTime();
			var timeLeft = countDownDate - now;
			const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		}, 1000);
	};

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
