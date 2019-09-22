
const carModelDefaultState = [];

export default (state = carModelDefaultState, action) => {
	switch (action.type) {
		case 'ADD_MODEL':
			return [...state, action.model];
		case 'UPDATE_MODEL':
			return state.map(model => {
				if (model.id === action.id) {
					return {
						...model,
						...action.updates,
					};
				} else {
					return model;
				}
			});
		case 'DELETE_MODEL':
			return state.filter(({ id }) => id !== action.id);

		default:
			return state;
	}
};
