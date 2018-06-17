import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import subscribe from './subscribe';
import { Provider as StoreProvider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools());
subscribe(store);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
