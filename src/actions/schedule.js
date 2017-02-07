import * as types from './types';
import { getUrl } from './index';

import firebase from 'firebase';


export function loadSchedule() {
	let restaurantName = getUrl();
	return dispatch => {
			dispatch({ type: types.LOAD_SCHEDULE_START });
				firebase.database().ref(`shedule-app/${restaurantName}/schedule`).on('value', function(data) {
				setTimeout(()=> {
					dispatch ({
						type: types.LOAD_SCHEDULE_SUCCESS,
						payload: data.val()
					});
				}, 1200);
 		});
	}
}

export function sendSchedule(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/schedule`).push({
		...data
	});
	return {
		type: types.SEND_SCHEDULE,
		payload: data
	}
}
