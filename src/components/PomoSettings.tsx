import React from 'react';
import './PomoSettings.css';

function PomoSettings(props: any) {
	return (
		<div className="settings">
			<div className="settings-section">
				<label id="break-label">Break Length</label>
				<div>
					<button className="btnClassName" id="break-decrement" onClick={() => props.changeBreakLength('-')}>
						-
					</button>
					<span id="break-length">{props.breakLength}</span>
					<button className="btnClassName" id="break-increment" onClick={() => props.changeBreakLength('+')}>
						+
					</button>
				</div>
			</div>
			<div className="settings-section">
				<label id="session-label">Session Length</label>
				<div>
					<button
						className="btnClassName"
						id="session-decrement"
						onClick={() => props.changeSessionLength('-')}
					>
						-
					</button>
					<span id="session-length">{props.sessionLength}</span>
					<button
						className="btnClassName"
						id="session-increment"
						onClick={() => props.changeSessionLength('+')}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}

export default PomoSettings;
