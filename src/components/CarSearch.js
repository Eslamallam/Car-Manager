import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const CarSearch = (props) => {
	return (
		<div className="col-md-6">
			<div className="form-group">
				<input
					type="text"
					value={props.filters.text}
					onChange={e => {
						props.dispatch(setTextFilter(e.target.value));
					}}
					className="form-control"
					placeholder="Search..."
				/>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(CarSearch);
