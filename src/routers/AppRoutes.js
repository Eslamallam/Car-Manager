import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CarForm from '../components/AddCar';
import EditCar from '../components/EditCar';
import ModelForm from '../components/AddModel';
import EditModel from '../components/EditModel';
import ModelsList from '../components/ModelsList';
import Home from '../components/Home';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/createmodel" component={ModelForm} />
				<Route path="/create" component={CarForm} />
				<Route path="/edit/:id" component={EditCar} />
				<Route path="/editmodel/:id" component={EditModel} />
				<Route path="/modelslist" component={ModelsList} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
