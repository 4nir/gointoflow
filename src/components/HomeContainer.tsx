import React from 'react';
import QuestionComponent from './QuestionComponent';
import { Button } from 'antd';

function HomeContainer(props: any) {
	return (
		<div>
			<div className="App">
				<QuestionComponent questionString="Is your workspace clear of all distractions?" />
				<QuestionComponent questionString="What is your goal?" />
				<QuestionComponent questionString="How long is your session?" />

				<Button type="primary" onClick={() => props.toggleSessionActive()}>
					Start Session
				</Button>
				<br />
			</div>
		</div>
	);
}

export default HomeContainer;
