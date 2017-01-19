import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ScheduleSearch from './ScheduleSearch';
import ScheduleList from './ScheduleList';

import { loadSchedule } from '../../actions/schedule';

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

		}

		this.handleNumberButton = this.handleNumberButton.bind(this);
	}

	componentWillMount() {
		this.props.loadSchedule()
	}

	handleSearch(search) {
		this.setState({currentSearch: search});
	}

	handleNumberButton() {
		this.setState({showNumber: !this.state.showNumber})
	}

	selectSchedule() {
		const { schedule } = this.props;

		console.log('fucn', schedule['-KacRYgUwzHhGJ4dV-89']);


		return schedule['-KacRYgUwzHhGJ4dV-89'];
	}



	render() {
		const { ...rest } = this.props;
		
		return (
			<div className="schedule-container">
				<h3> Расписание {this.state.selectedWeek == 0 ? ' на эту ' : ' на следующую '} неделю </h3>
				
				<ScheduleSearch search={this.handleSearch} />

				<button onClick={this.selectThisWeek.bind(this)} className="btn btn-danger">На эту неделю</button>
				<button onClick={this.selectNextWeek.bind(this)} className="btn btn-danger">На следующую неделю</button>
				

				<div className="number-select">
					{!this.state.showNumber ? 
						<button className="btn btn-warning" onClick={this.handleNumberButton}>Показать телефоны</button> : 
						<button className="btn btn-success" onClick={this.handleNumberButton}>Скрыть телефоны</button>
					}
				</div>

				<ScheduleList
					currentSearch={this.state.currentSearch}
					showNumber={this.state.isShowNumber}
					schedule={this.selectSchedule()}
				/>
			</div>
		)
	}

	

	selectThisWeek() {
		this.setState({selectedWeek: 0})
	}

	selectNextWeek() {
		this.setState({selectedWeek: 1})
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