import React from 'react';
import './App.css';
import QuestionComponent from './components/QuestionComponent';
import { Button } from 'antd';
import DynamicFieldSet from './components/GoalsInputComponent';

function App() {
	return (
		<div className="App-container">
			<div className="App-banner">Deepflow</div>
			<div className="App">
				<QuestionComponent questionString="Is your workspace clear of all distractions?" />
				<QuestionComponent questionString="What is your goal?" />
				<DynamicFieldSet />
				<QuestionComponent questionString="How long is your session?" />

				<Button type="primary">Start Session</Button>
			</div>
		</div>
	);
}

export default App;
