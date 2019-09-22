import React from 'react';
import CarItem from './CarItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectCar from '../selectors/cars';

const CarsList = props => {
	return (
		<div className="container pt-2">
			<Link className="m-2 btn btn-sm btn-primary" to="/create">
				Add Car
			</Link>

			{props.cars.length > 0 ? (
				props.cars.map(car => {
					return (
						<div class="row">
							<div class="col-sm-8">
								<CarItem key={car.id} {...car} />
							</div>
						</div>
					);
				})
			) : (
				<p className="mt-3">There is no cars yet</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cars: selectCar(state.cars, state.filters),
	};
};

export default connect(mapStateToProps)(CarsList);
