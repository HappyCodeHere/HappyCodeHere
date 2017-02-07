import React, { Component } from 'react';
import { RelativeLink } from 'react-router-relative-links';
import { connect } from 'react-redux';

import { loadDate, loadSuggest } from '../../actions/shift.js';

import './Shift.scss';

class ShiftContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.loadDate();
		this.props.loadSuggest();
	}

	render() {
		return (
			<div className="shift-container my-box">
				<h3> Я хочу... </h3>
				<RelativeLink to="select" className="btn btn-warning select-button"> Найти смену </RelativeLink>
				<RelativeLink to="create" className="btn btn-info select-button"> Отдать смену </RelativeLink>
				<RelativeLink to="suggest" className="btn btn-success select-button"> Предложить поработать </RelativeLink>
			</div>
		)
	}
};

export default connect(null, { loadDate, loadSuggest })(ShiftContainer)
