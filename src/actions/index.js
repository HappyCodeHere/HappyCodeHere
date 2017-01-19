import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAlM5kvRzYCaP3466WtLpKdtiZBTTyARYo",
    authDomain: "sheduleapp-5f42c.firebaseapp.com",
    databaseURL: "https://sheduleapp-5f42c.firebaseio.com",
    storageBucket: "sheduleapp-5f42c.appspot.com",
};
  
firebase.initializeApp(config);



export function getUrl() {
	var url = window.location.href;
	var pathArray = window.location.pathname.split( '/' );
	var secondLevelLocation = pathArray[1];

	return secondLevelLocation
}