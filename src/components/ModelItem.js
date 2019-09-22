import React from 'react';
import { Link } from 'react-router-dom';

const ModelItem = ({ id, name }) => {
	return (
		<div className="list-group">			
			<Link className="btn btn-info" to={`/editmodel/${id}`}>
				<strong className="text-uppercase">{name}</strong>
			</Link>
		</div>
	);
};

export default ModelItem;
