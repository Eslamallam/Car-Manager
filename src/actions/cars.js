import uuid from 'uuid';

//Add Car
export const AddNewCar = ({ name = '', horsepower = 0, price = 0 } = {}) => ({
	type: 'ADD_CAR',
	car: {
		id: uuid(),
		name,
		horsepower,
		price,
	},
});

//Update Car
export const UpdateCar = (id, updates) => ({
	type: 'UPDATE_CAR',
	id,
	updates,
});

//Delete Car
export const RemoveCar = ({ id } = {}) => ({
	type: 'DELETE_CAR',
	id,
});
