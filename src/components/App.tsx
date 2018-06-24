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
			<ScreenDetailsList />
		</div>
	</div>
);

export default App;
