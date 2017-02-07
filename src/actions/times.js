import * as types from './types';
import { getUrl } from './index';

import firebase from 'firebase';

import { reset } from 'redux-form';


export function loadTimes() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/times`).on('value', function(data) {
    		console.log(data.val());
			return dispatch ({
				type: types.LOAD_TIMES,
				payload: data.val()
			});
 		});
	}
}

export function sendTimes(times) {
	return dispatch => {
		dispatch(reset('timesForm'));
		let restaurantName = getUrl();
		firebase.database().ref(`shedule-app/${restaurantName}/times`).push({
			...times
		});
		dispatch({
			type: types.SEND_TIMES,
			payload: times
		});
	}

}

export function deleteTimes(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/times/${data}`).remove()
	return {
		type: types.DELETE_TIMES,
		payload: data
	}
};
