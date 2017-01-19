import * as types from '../actions/types.js';

const initialState = {
	'-KacRYgUwzHhGJ4dV-89': [
		{ Имя: 'Вася', Телефон: '2323', fullDate: {} },
		{ Имя: 'Вася', Телефон: '2323', fullDate: {} },
		{ Имя: 'Вася', Телефон: '2323', fullDate: {} }
	]
};

export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_SCHEDULE:
		console.log(action.payload);
			return {...action.payload};
		
	}

	return state;
}