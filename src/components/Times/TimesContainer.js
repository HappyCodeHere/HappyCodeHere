import React, { Component } from 'react';
import { connect } from 'react-redux';

import TimesList from './TimesList.js';
import TimesForm from './TimesForm.js';

import { loadTimes, deleteTimes } from '../../actions/index.js';

class TimesContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showingForm: false
		}

		this.toggleForm = this.toggleForm.bind(this);
	}

	componentWillMount() {
		this.props.loadTimes()
	}

	render() {
		return (
			<div className="times-container">
				<h3> Заказ выходных на следующую неделю </h3>

				<TimesList data={this.props.loadTimesData} delete={this.props.deleteTimes}/>

				<button onClick={this.toggleForm} className="btn btn-success"> Заказать выходные </button>

				{this.state.showingForm ? <TimesForm /> : null}

			</div>
		)
	}

	toggleForm() {
		this.setState({ showingForm: !this.state.showingForm })
	}
}

function mapStateToProps(state) {
	return {
		loadTimesData: state.loadTimes[0]
	}
}

export default connect(mapStateToProps, { loadTimes, deleteTimes })(TimesContainer);