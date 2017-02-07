import React, { Component } from 'react';
import Main from './Main.js';
import NavBar from './NavBar.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<div className="app">
    		  <NavBar />

          <div className="top">
  	       	 {this.props.children}
          </div>
  	       	{/*<footer>
  	       		<p> это типо футер, тут разная инфа </p>
              <h6> Copyright © 2016 Shedule App. All rights reserved. Делается с любовью </h6>
              <img src="http://pngimg.com/upload/small/christmas_PNG3769.png"/>
  	       	</footer>*/}
            
         </div>
       </MuiThemeProvider>
    );
  }
}
