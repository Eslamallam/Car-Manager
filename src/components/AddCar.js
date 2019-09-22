import React from 'react';
import CarForm from './CarForm';
import { connect } from 'react-redux';
import { AddNewCar } from '../actions/cars';

const AddCar = props => {
	return (
		<CarForm
			onSubmit={car => {
				props.dispatch(AddNewCar(car));
				props.history.push('/');
			}}
		/>
	);
};

export default connect()(AddCar);
