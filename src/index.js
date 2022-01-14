import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@styles/index.css';
import VConsole from 'vconsole';

import { Provider } from 'react-redux';
import store from '@modules/redux/configureStore';
import App from './App';

const vConsole = new VConsole({ theme: 'dark' });

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
