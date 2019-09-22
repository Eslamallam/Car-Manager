
const carDefaultState = [];

export default (state = carDefaultState, action) => {
	switch (action.type) {
		case 'ADD_CAR':
			return [...state, action.car];
		case 'UPDATE_CAR':
			return state.map(car => {
				if (car.id === action.id) {
					return {
						...car,
						...action.updates,
					};
				} else {
					return car;
				}
			});
		case 'DELETE_CAR':
			return state.filter(({ id }) => id !== action.id);

		default:
			return state;
	}
};
