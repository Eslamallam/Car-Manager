import React from 'react';
import ModelForm from './ModelForm';
import { connect } from 'react-redux';
import { UpdateModel, DeleteModel } from '../actions/car_models';

const EditModel = props => {
	return (
		<div className="container">
			<ModelForm
				model={props.model}
				onSubmit={model => {
					props.dispatch(UpdateModel(props.model.id, model));
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(DeleteModel({ id: props.model.id }));
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
	    model: state.models.find(model => model.id === props.match.params.id),
	};
};

export default connect(mapStateToProps)(EditModel);
