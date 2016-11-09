import React, { Component } from 'react';
import { Link } from 'react-router';



class MainSelect extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main-select my-box">
				<h1> Привет! </h1>
				<h1> Выбери свой ресторан: </h1>
				<Link to="kamenka" className="my-button kamenka hvr-wobble-top"> Каменка </Link>
				<Link to="puskari" className="my-button puskari hvr-wobble-top"> Пушкари </Link>
				<Link to="nemiga" className="my-button nemiga hvr-wobble-top"> Немига </Link>
				<Link to="vokzal" className="my-button vokzal hvr-wobble-top"> Вокзал </Link>
				<Link to="airport" className="my-button airport hvr-wobble-top"> Аэропорт </Link>
			</div>
			
			
		)
	}
}

export default MainSelect;