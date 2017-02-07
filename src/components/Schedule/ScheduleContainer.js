import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ScheduleSearch from './ScheduleSearch';
import ScheduleList from './ScheduleList';


import { loadSchedule } from '../../actions/schedule';

import CircularProgress from 'material-ui/CircularProgress';

import './Schedule.scss';

const propTypes = {
	schedule: PropTypes.object.isRequired,
	loadSchedule: PropTypes.func.isRequired
}

class ScheduleContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentSearch: '',
			isShowNumber: false,
			selectedWeek: 0,

		}

		this.handleSearch = this.handleSearch.bind(this);

		this.selectThisWeek = this.selectThisWeek.bind(this);
		this.selectNextWeek = this.selectNextWeek.bind(this);

		this.handleNumberButton = this.handleNumberButton.bind(this);
	}

	componentWillMount() {
		this.props.loadSchedule();
	}

	handleSearch(search) {
		this.setState({currentSearch: search});
	}

	selectThisWeek() {
		this.setState({selectedWeek: 0});
	}

	selectNextWeek() {
		this.setState({selectedWeek: 1});
	}

	handleNumberButton() {
		this.setState({isShowNumber: !this.state.isShowNumber});
	}

	selectSchedule() {
		const { schedule } = this.props;

		let week = Object.keys(schedule.data)[this.state.selectedWeek];

		return schedule.data[week];
	}


	render() {
		return (
			<div className="schedule-container">
				<h3> Расписание {this.state.selectedWeek === 0 ? ' на эту ' : ' на следующую '} неделю </h3>

				<ScheduleSearch search={this.handleSearch} />

				{Object.keys(this.props.schedule.data).length > 1 ?
					<div>
						<button onClick={this.selectThisWeek} className="btn btn-info">На эту неделю</button>
						<button onClick={this.selectNextWeek} className="btn btn-info">На следующую неделю</button>
					</div> : null }

				<div className="number-select">
					{!this.state.isShowNumber ?
						<button className="btn btn-warning" onClick={this.handleNumberButton}>Показать телефоны</button> :
						<button className="btn btn-success" onClick={this.handleNumberButton}>Скрыть телефоны</button>
					}
				</div>

				{this.props.schedule.loading ?
					<CircularProgress size={60} thickness={4} color={'rgb(136, 76, 235)'} style={{'marginTop': '30px'}}/> :

					Object.keys(this.props.schedule.data).length !== 0 ?

					<ScheduleList
						currentSearch={this.state.currentSearch}
						showNumber={this.state.isShowNumber}
						schedule={this.selectSchedule()}
					/> :

					<p> Расписания нету:( </p>
				}

			</div>
		)
	}
}

ScheduleContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const { schedule } = state;

	return {
		schedule
	}
}

export default connect(mapStateToProps, { loadSchedule })(ScheduleContainer);
