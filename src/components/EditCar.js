import React from 'react';
import CarForm from './CarForm';
import { connect } from 'react-redux';
import { UpdateCar, RemoveCar } from '../actions/cars';

const EditCar = props => {
	return (
		<div className="container">
			<CarForm
				car={props.car}
				onSubmit={car => {
					props.dispatch(UpdateCar(props.car.id, car));
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(RemoveCar({ id: props.car.id }));
					props.history.push('/');
				}}

				className="btn btn-danger float-right"
			>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		car: state.cars.find(car => car.id === props.match.params.id),
	};
};

export default connect(mapStateToProps)(EditCar);
