import React, { useState } from 'react';
import './App.css';
import QuestionComponent from './components/QuestionComponent';
import { Button } from 'antd';
import DynamicFieldSet from './components/GoalsInputComponent';
import PomoTimer from './components/PomoTimer';

function App() {
	const [ timerOn, setTimerOn ] = useState(false);
	function toggleTimerOn() {
		setTimerOn(!timerOn);
	}
	return (
		<div className="App-container">
			<div className="App-banner">Deepflow</div>
			<div className="App">
				<QuestionComponent questionString="Is your workspace clear of all distractions?" />
				<QuestionComponent questionString="What is your goal?" />
				<QuestionComponent questionString="How long is your session?" />

				<Button type="primary" onClick={() => toggleTimerOn()}>
					Start Session
				</Button>
				<br />
				{timerOn ? <div /> : <PomoTimer />}
			</div>
		</div>
	);
}

export default App;
