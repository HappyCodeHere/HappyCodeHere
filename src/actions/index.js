import { 
	LOAD_DATE,
	SEND_DATE,
	DELETE_DATE,

	LOAD_SUGGEST,
	SEND_SUGGEST,
	DELETE_SUGGEST,

	LOAD_NEWS, 
	SEND_NEWS,
	DELETE_NEWS,

	LOAD_SCHEDULE, 
	SEND_SCHEDULE,

	LOAD_TIMES, 
	SEND_TIMES, 
	DELETE_TIMES } from './types';

import firebase from 'firebase';

/*import { schedule } from './schedule.js';*/

var config = {
    apiKey: "AIzaSyAlM5kvRzYCaP3466WtLpKdtiZBTTyARYo",
    authDomain: "sheduleapp-5f42c.firebaseapp.com",
    databaseURL: "https://sheduleapp-5f42c.firebaseio.com",
    storageBucket: "sheduleapp-5f42c.appspot.com",
};
  
firebase.initializeApp(config);



function getUrl() {
	var url = window.location.href;
	var pathArray = window.location.pathname.split( '/' );
	var secondLevelLocation = pathArray[1];

	return secondLevelLocation
}


export function loadDate() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/shift/create`).on('value', function(data) {
			return dispatch ({
				type: LOAD_DATE,
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
		type: SEND_DATE,
		payload: data
	}
}

export function deleteDate(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/create/${data}`).remove()
	return {
		type: DELETE_DATE,
		payload: data
	}
};


export function loadSuggest() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/shift/suggest`).on('value', function(data) {
			return dispatch ({
				type: LOAD_SUGGEST,
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
		type: SEND_SUGGEST,
		payload: data
	}
}

export function deleteSuggest(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/shift/suggest/${data}`).remove()
	return {
		type: DELETE_SUGGEST,
		payload: data
	}
};


export function loadNews() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/news`).on('value', function(data) {
			return dispatch ({
				type: LOAD_NEWS,
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
		type: SEND_NEWS,
		payload: news
	}
}

export function deleteNews(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/news/${data}`).remove()
	return {
		type: DELETE_NEWS,
		payload: data
	}
};


export function loadSchedule() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/schedule`).on('value', function(data) {
			return dispatch ({
				type: LOAD_SCHEDULE,
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
		type: SEND_SCHEDULE,
		payload: data
	}
}

export function loadTimes() {
	let restaurantName = getUrl();
	return function(dispatch) {
    	firebase.database().ref(`shedule-app/${restaurantName}/times`).on('value', function(data) {
    		console.log(data.val());
			return dispatch ({
				type: LOAD_TIMES,
				payload: data.val()
			});
 		});
	}
}

export function sendTimes(times) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/times`).push({
		...times
	});
	return {
		type: SEND_TIMES,
		payload: times
	}
}

export function deleteTimes(data) {
	let restaurantName = getUrl();
	firebase.database().ref(`shedule-app/${restaurantName}/times/${data}`).remove()
	return {
		type: DELETE_TIMES,
		payload: data
	}
};