import { createStore, combineReducers, applyMiddleware } from 'redux';
import carReducer from '../reducers/cars';
import carModelsReducer from '../reducers/car_models';
import filterReducer from '../reducers/filters';
import logger from 'redux-logger';

export default () => {
	const store = createStore(
		combineReducers({
			cars: carReducer,
			models: carModelsReducer,
			filters: filterReducer,
		}),

		applyMiddleware(logger)
	);

	return store;
};
