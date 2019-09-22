import uuid from 'uuid';

// Add Model
export const AddNewModel = ({ name = '' } = {}) => ({
	type: 'ADD_MODEL',
	model: {
		id: uuid(),
		name,
	},
});

// Delete Model
export const DeleteModel = ({ id } = {}) => ({
	type: 'DELETE_MODEL',
	id,
});

// Update Model
export const UpdateModel = (id, updates) => ({
	type: 'UPDATE_MODEL',
	id,
	updates,
});
