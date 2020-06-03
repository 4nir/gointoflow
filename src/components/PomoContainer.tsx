import React, { useState, useEffect } from 'react';
import PomoTimer from './PomoTimer';
import './PomoContainer.css';
import PomoSettings from './PomoSettings';

function PomoContainer(props: any) {
	const [ sessionLength, setSessionLength ] = useState(25);
	const [ breakLength, setBreakLength ] = useState(5);
	const [ timerOn, setTimerOn ] = useState(false);
	const [ secondsLeft, setSecondsLeft ] = useState(sessionLength * 60);

	function changeSessionLength(change: string) {
		if (change == '+' && !timerOn) {
			let newSessionLength = sessionLength + 1;
			setSessionLength(newSessionLength);
			setSecondsLeft(newSessionLength * 60);
		} else if (change == '-' && !timerOn) {
			let newSessionLength = sessionLength - 1;
			setSessionLength(newSessionLength);
			setSecondsLeft(newSessionLength * 60);
		} else {
			console.log('Error');
		}
	}

	function changeBreakLength(change: string) {
		if (change == '+' && !timerOn) {
			setBreakLength(breakLength + 1);
		} else if (change == '-' && !timerOn) {
			setBreakLength(breakLength - 1);
		} else {
			console.log('Error');
		}
	}

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
		<div>
			<div className="pomodoro-clock">
				<div className="pomodoro-clock-header">
					<h1 className="pomodoro-clock-header-name">Pomodoro Clock</h1>
				</div>
				<PomoSettings
					sessionLength={sessionLength}
					breakLength={breakLength}
					changeSessionLength={changeSessionLength}
					changeBreakLength={changeBreakLength}
					timerOn={timerOn}
				/>
				<PomoTimer
					toggleSessionActive={props.toggleSessionActive}
					toggleTimerOn={toggleTimerOn}
					timeLeftInSeconds={secondsLeft}
				/>
			</div>
		</div>
	);
}

export default PomoContainer;
