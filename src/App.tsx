import React from 'react';
import './App.css';
import QuestionComponent from './components/QuestionComponent';
import { Button } from 'antd';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<QuestionComponent questionString="Is your workspace clear of all distractions?" />
				<QuestionComponent questionString="What is your goal?" />
				<QuestionComponent questionString="Set up your music" />

				<Button type="primary">Set/Start Pomodoro Timer</Button>
			</div>
		</div>
	);
}

export default App;
