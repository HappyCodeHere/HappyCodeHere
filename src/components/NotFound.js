import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NotFound extends Component {
	render() {
		return (
			<div className="not-found">
				<h3> Потерялся? </h3>
				<Link to="/"> Вернуться на главную </Link>
			</div>
		)
	}
};