import * as types from './types';
import { getUrl } from './index';

import firebase from 'firebase';


export function loadDate() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/shift/create`).on('value', function(data) {
			return dispatch ({
				type: types.LOAD_DATE,
				payload: data.val()
			});
 		});
	}
}

export function sendDate(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/create`).push({
		...data
	});
	return {
		type: types.SEND_DATE,
		payload: data
	}
}

export function deleteDate(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/create/${data}`).remove()
	return {
		type: types.DELETE_DATE,
		payload: data
	}
};


export function loadSuggest() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/shift/suggest`).on('value', function(data) {
			return dispatch ({
				type: types.LOAD_SUGGEST,
				payload: data.val()
			});
 		});
	}
}


export function sendSuggest(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/suggest`).push({
		...data
	});
	return {
		type: types.SEND_SUGGEST,
		payload: data
	}
}

export function deleteSuggest(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/suggest/${data}`).remove()
	return {
		type: types.DELETE_SUGGEST,
		payload: data
	}
};