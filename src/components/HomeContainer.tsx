import React, { useState } from 'react';
import QuestionComponent from './QuestionComponent';
import { Button } from 'antd';
import './HomeContainer.css';

function HomeContainer(props: any) {
	const [ q1Clicked, setQ1Clicked ] = useState(false);
	const [ q2Clicked, setQ2Clicked ] = useState(false);
	const [ q3Clicked, setQ3Clicked ] = useState(false);

	function toggleQuesClicked(quesNum: number) {
		if (quesNum == 1) {
			setQ1Clicked(!q1Clicked);
		} else if (quesNum == 2) {
			setQ2Clicked(!q2Clicked);
		} else if (quesNum == 3) {
			setQ3Clicked(!q3Clicked);
		}
	}
	return (
		<div>
			<div className="App">
				<div id="q1">
					<QuestionComponent
						questionString="Set up your work music (Low-fi, Hans Zimmer, etc.)"
						toggleQuesClicked={toggleQuesClicked}
						quesNum={1}
					/>
				</div>
				<div id="q2">
					<QuestionComponent
						questionString="Clear your workspace of all distractions"
						toggleQuesClicked={toggleQuesClicked}
						quesNum={2}
					/>
				</div>
				<div id="q3">
					<QuestionComponent
						questionString="Write down your goal in a sentence"
						toggleQuesClicked={toggleQuesClicked}
						quesNum={3}
					/>
				</div>

				<Button
					disabled={!(q1Clicked && q2Clicked && q3Clicked)}
					type="primary"
					onClick={() => props.toggleSessionActive()}
				>
					Start Session
				</Button>
				<br />
			</div>
		</div>
	);
}

export default HomeContainer;
