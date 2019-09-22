import React from 'react';
import ModelItem from './ModelItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ModelsList = props => {
	return (
		<div className="container pt-2">
			<Link className="m-2 btn btn-sm btn-primary" to="/createmodel">
				Add Model
			</Link>
			{props.models.length > 0 ? (
				props.models.map(model => {
					return <ModelItem key={model.id} {...model} />;
				})
			) : (
				<p className="mt-3">There is no models yet</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		models: state.models,
	};
};

export default connect(mapStateToProps)(ModelsList);
