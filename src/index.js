import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRoutes';

const store = configureStore();

const state = store.getState();

console.log(state);

const MyApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
