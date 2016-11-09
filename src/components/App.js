import React, { Component } from 'react';
import Main from './Main.js';
import NavBar from './NavBar.js';


export default class App extends Component {
  render() {
    return (
    	<div className="app">
    		<NavBar />
        <div className="top mdl-card mdl-shadow--2dp">
	       	 {this.props.children}
        </div>
	       	{/*<footer>
	       		<p> это типо футер, тут разная инфа </p>
            <h6> Copyright © 2016 Shedule App. All rights reserved. Делается с любовью </h6>
	       	</footer>*/}
       </div>
    );
  }
}