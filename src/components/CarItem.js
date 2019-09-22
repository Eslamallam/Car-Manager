import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CarItem = ({ id, name, horsepower, price }) => {
	return (
		<div className="card m-2 text-center">
			<div className="card-body">
				<h5>{name}</h5>
				<h5>{horsepower} HP</h5>
				<h5>{price} EUR</h5>
				<div class="card-footer">
					<Link to={`/edit/${id}`}>Edit</Link>
				</div>
			</div>
		</div>
	);
};

export default connect()(CarItem);
