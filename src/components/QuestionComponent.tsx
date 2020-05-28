import React from 'react';
import './QuestionComponent.css';

function QuestionComponent(props: any) {
	return (
		<div>
			<div className="Question-box">{props.questionString}</div>
			<br />
		</div>
	);
}

export default QuestionComponent;
