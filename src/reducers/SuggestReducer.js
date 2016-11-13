import * as types from '../actions/types.js';

export default function(state = [], action) {
	switch(action.type) {
		case types.LOAD_SUGGEST:
			return [action.payload];
		
	}

	return state;
}