import * as types from '../actions/types.js';

const initialState = {
	'data': {
		'id': [
			{ Имя: '', Телефон: '', fullDate: {} }
		]
	},
	'loading': true,
	'error': null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_SCHEDULE_START:
			return {...state, loading: true};

		case types.LOAD_SCHEDULE_SUCCESS:
			let schedule = action.payload;
			if(!action.payload) { schedule = initialState.data}
			return {...state, data: schedule, loading: false};

		default:
			return state;
	}
}
