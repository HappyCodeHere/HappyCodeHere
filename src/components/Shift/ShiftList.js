import React, { Component } from 'react';
import { RelativeLink } from 'react-router-relative-links';
import { connect } from 'react-redux';

import ShiftItem from './ShiftItem.js';

import { loadDate, loadSuggest } from '../../actions/index.js';

class ShiftList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.loadDate();
		this.props.loadSuggest();
	}
	
	render() {
		let load = this.props.load || {};

		const list = Object.keys(load).map((value) => {
			
			console.log(value)
			return <RelativeLink to={value} params={{ name: load[value].name }}> <ShiftItem date={load[value].date} position={load[value].position} time={load[value].time} /> </RelativeLink>
		});

		let suggest = this.props.suggest || {};

		const suggest2 = Object.keys(suggest).map((value) => {
			console.log(value)
			return <RelativeLink to={value} params={{ name: suggest[value].name }}> <ShiftItem date={suggest[value].date} position={suggest[value].position} time={suggest[value].time} /> </RelativeLink>
		});
		return (
			<div className="shift-list my-box">
				<h3> Текущие замены </h3>
				<div className="row">
					<div className="col-md-6">
						<h4> Желающие отдохнуть </h4>
						{list}
					</div>

					<div className="col-md-6">
						<h4> Желающие поработать </h4>
						{suggest2}
					</div>
				</div>
				<h4> И давайте активнее =) </h4>

				<RelativeLink to=".." className="btn btn-danger"> Назад </RelativeLink>
			</div>

		)
	}
};

function mapStateToProps(state) {
	return {
		load: state.loadDate[0],
		suggest: state.loadSuggest[0]
	}
}

export default connect(mapStateToProps, { loadDate, loadSuggest })(ShiftList);