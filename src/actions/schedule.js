import * as types from './types';
import { getUrl } from './index';

import firebase from 'firebase';


export function loadSchedule() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/schedule`).on('value', function(data) {
			return dispatch ({
				type: types.LOAD_SCHEDULE,
				payload: data.val()
			});
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