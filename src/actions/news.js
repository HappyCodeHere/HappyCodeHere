import * as types from './types';
import { getUrl } from './index';

import firebase from 'firebase';


export function loadNews() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/news`).on('value', function(data) {
			return dispatch ({
				type: types.LOAD_NEWS,
				payload: data.val()
			});
 		});
	}
}

export function sendNews(news) {
	let restaurantName = getUrl();
	var date = new Date;
	var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
	var need = {
		date: date.toLocaleString("ru", options.day)
	}
	/*console.log(news);
	console.log(date);*/
	firebase.database().ref(`shedule-app/news`).push({
		...news,
		...need
	});
	return {
		type: types.SEND_NEWS,
		payload: news
	}
}

export function deleteNews(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/news/${data}`).remove()
	return {
		type: types.DELETE_NEWS,
		payload: data
	}
};