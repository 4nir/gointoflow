import React from 'react';
import QuestionComponent from './QuestionComponent';
import { Button } from 'antd';
import './HomeContainer.css';

function HomeContainer(props: any) {
	return (
		<div>
			<div className="App">
				<div id="q1">
					<QuestionComponent questionString="Set up your work music (Low-fi, Hans Zimmer, etc.)" />
				</div>
				<div id="q2">
					<QuestionComponent questionString="Clear your workspace of all distractions" />
				</div>
				<div id="q3">
					<QuestionComponent questionString="Write down your goal in a sentence" />
				</div>

				<Button type="primary" onClick={() => props.toggleSessionActive()}>
					Start Session
				</Button>
				<br />
			</div>
		</div>
	);
}

export default HomeContainer;
