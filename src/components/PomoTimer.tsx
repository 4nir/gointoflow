import React, { useState, useEffect } from 'react';
import './PomoTimer.css';
import { Button } from 'antd';

function PomoTimer(props: any) {
	const [ timerOn, setTimerOn ] = useState(false);
	const [ secondsLeft, setSecondsLeft ] = useState(props.timeLeftInSeconds);
	const buttonString = timerOn ? 'Stop' : 'Start';

	const formatTime = (timeLeftInSeconds: number) => {
		let minuteText = '';
		let secondText = '';

		if (timeLeftInSeconds == 0) {
			return '00:00';
		}

		let minute: number = Math.floor(timeLeftInSeconds / 60);
		if (minute < 10) {
			minuteText = '0' + minute.toString();
		} else {
			minuteText = minute.toString();
		}

		let second: number = timeLeftInSeconds - 60 * minute;
		if (second < 10) {
			secondText = '0' + second.toString();
		} else {
			secondText = second.toString();
		}

		return `${minuteText}:${secondText}`;
	};

	function toggleTimerOn() {
		setTimerOn(!timerOn);
	}

	useEffect(() => {
		if (timerOn) {
			if (secondsLeft > 0) {
				setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
			} else {
				setSecondsLeft(0);
			}
		}
	});

	return (
		<div className="timer-container">
			<div className="times">
				<div className="times-content">
					<label id="timer-label">Session</label>
					<span id="time-left">{formatTime(secondsLeft)}</span>
				</div>
			</div>
			<div className="flex-container">
				<Button type="primary" onClick={() => toggleTimerOn()}>
					Start/Pause
				</Button>
				<Button type="primary" onClick={() => props.toggleSessionActive()}>
					End Session
				</Button>
			</div>
			<br />
		</div>
	);
}

export default PomoTimer;
