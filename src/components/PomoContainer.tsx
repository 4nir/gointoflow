import React, { useState, useEffect } from 'react';
import PomoTimer from './PomoTimer';
import './PomoContainer.css';
import PomoSettings from './PomoSettings';

function PomoContainer(props: any) {
	const [ sessionLength, setSessionLength ] = useState(25);
	const [ breakLength, setBreakLength ] = useState(5);
	const [ timeLeftInSeconds, setTimeLeftInSeconds ] = useState(240);

	function changeSessionLength(change: string) {
		if (change == '+') {
			setSessionLength(sessionLength + 1);
		} else if (change == '-') {
			setSessionLength(sessionLength - 1);
		} else {
			console.log('Error');
		}
	}

	function changeBreakLength(change: string) {
		if (change == '+') {
			setBreakLength(breakLength + 1);
		} else if (change == '-') {
			setBreakLength(breakLength - 1);
		} else {
			console.log('Error');
		}
	}

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
				/>
				<PomoTimer toggleSessionActive={props.toggleSessionActive} timeLeftInSeconds={sessionLength * 60} />
			</div>
		</div>
	);
}

export default PomoContainer;
