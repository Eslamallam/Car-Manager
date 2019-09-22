import React from 'react';
import ModelForm from './ModelForm';
import { connect } from 'react-redux';
import { AddNewModel } from '../actions/car_models';

const AddModel = props => {
	return (
		<ModelForm
			onSubmit={model => {
				props.dispatch(AddNewModel(model));
				props.history.push('/');
			}}
		/>
	);
};

export default connect()(AddModel);
