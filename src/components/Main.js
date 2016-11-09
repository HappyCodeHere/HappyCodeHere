import React, { Component } from 'react';
import { RelativeLink } from 'react-router-relative-links';



class Main extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main my-box">
				<h2> Что будешь смотреть? </h2>
				<RelativeLink to="shift" className="my-button shift"> Замены </RelativeLink>
				<RelativeLink to="times" className="my-button times"> Заказ выходных </RelativeLink>
				<RelativeLink to="schedule" className="my-button schedule"> Расписание </RelativeLink>
				<RelativeLink to="news" className="my-button news"> Новости </RelativeLink>
			</div>
			
			
		)
	}
}

export default Main;