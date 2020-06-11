import React, { useState } from 'react';
import './App.css';
import HomeContainer from './components/HomeContainer';
import PomoContainer from './components/PomoContainer';

function App() {
	//Main
	const [ sessionActive, setSessionActive ] = useState(false);

	function toggleSessionActive() {
		setSessionActive(!sessionActive);
	}
	return (
		<div className="App-container">
			<div className="App-banner">gointoflow.com</div>
			<div className="App">
				{!sessionActive && <HomeContainer toggleSessionActive={toggleSessionActive} />}
				{sessionActive && <PomoContainer toggleSessionActive={toggleSessionActive} />}
			</div>
			<div className="App-footer" />
		</div>
	);
}

export default App;
