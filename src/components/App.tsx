import * as React from 'react';
import VizWrapper from './VizWrapper';
import ScreenDetailsList from '../containers/ScreenDetailsList';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<div className="App-viz">
			<VizWrapper />
		</div>
		<div className="App-screen">
			<h2>Detected screens</h2>
			<p>Move this window to other screens in order to detect them.</p>
			<ScreenDetailsList />
		</div>
	</div>
);

export default App;
