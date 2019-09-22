import React from 'react';
import ModelsList from './ModelsList';
import CarsList from './CarsList';
import CarSearch from './CarSearch';

const Home = () => {
	return (
		<div className="container m-5">
			<div className="m-5">
				<CarSearch />
			</div>
			<div className="row">
				<div className="col-sm-8">
					<CarsList />
				</div>
				<div className="col-sm-4">
					<ModelsList />
				</div>
			</div>
		</div>
	);
};

export default Home;
