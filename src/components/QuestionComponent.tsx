import React, { useState } from 'react';
import './QuestionComponent.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';

function QuestionComponent(props: any) {
	const [ borderColor, setBorderColor ] = useState('grey');
	const [ clicked, setClicked ] = useState(false);

	function toggleBorderColor() {
		clicked ? setBorderColor('grey') : setBorderColor('green');
		setClicked(!clicked);
	}
	function toggleMouseBorderColor(action: string) {
		if (action == 'enter' && !clicked) {
			setBorderColor('yellow');
		}
		if (action == 'exit' && !clicked) {
			setBorderColor('grey');
		}
	}
	return (
		<div>
			<div
				className="Question-box"
				style={{ borderColor: borderColor }}
				onClick={() => toggleBorderColor()}
				onMouseEnter={() => toggleMouseBorderColor('enter')}
				onMouseLeave={() => toggleMouseBorderColor('exit')}
			>
				<span>{props.questionString}</span>
			</div>
			<br />
		</div>
	);
}

export default QuestionComponent;
