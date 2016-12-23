import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScheduleSearch from './ScheduleSearch.js';
import ScheduleList from './ScheduleList.js';

import { loadSchedule, sendSchedule } from '../../actions/index.js';

import './Schedule.scss';

class ScheduleContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentSearch: '',
			selectedWeek: 0,
			showNumber: false,
			titleName: '',

		}

		this.handleNumberButton = this.handleNumberButton.bind(this);

		this.changeTitle = this.changeTitle.bind(this);
	}

	componentWillMount() {
		this.props.loadSchedule()
	}

	changeTitle(week) {
		console.log(week);
		this.setState({titleName: week});
		return week;
	}

	render() {
		

		return (
			<div className="schedule-container">
				<h3> Расписание {this.state.selectedWeek == 0 ? ' на эту ' : ' на следующую '} неделю </h3>
				{/*<h3> Расписание на {this.state.titleName}</h3>*/}
				
				<ScheduleSearch search={this.mySearch.bind(this)} />

				<button onClick={this.selectThisWeek.bind(this)} className="btn btn-danger"> На эту неделю </button>
				<button onClick={this.selectNextWeek.bind(this)} className="btn btn-danger"> На следующую неделю </button>
				

				<div className="number-select">
					{!this.state.showNumber ? 
						<button className="btn btn-warning" onClick={this.handleNumberButton}> Показать телефоны </button> : 
						<button className="btn btn-success" onClick={this.handleNumberButton}> Скрыть телефоны </button>
					}
				</div>

				

				{/*<button onClick={this.props.sendSchedule} className="btn btn-info"> ющую неделю </button>*/}

				<ScheduleList data={this.props.loadScheduleData} week={this.state.selectedWeek} currentSearch={this.state.currentSearch} checkbox={this.state.showNumber} changeTitle={this.changeTitle}/>

				
			</div>
		)
	}

	mySearch(search) {
		this.setState({currentSearch: search});
	}

	selectThisWeek() {
		this.setState({selectedWeek: 0})
	}

	selectNextWeek() {
		this.setState({selectedWeek: 1})
	}

	handleNumberButton() {
		this.setState({showNumber: !this.state.showNumber})
	}

	
}

function mapStateToProps(state) {
	return {
		loadScheduleData: state.loadSchedule
	}
}

export default connect(mapStateToProps, { loadSchedule, sendSchedule })(ScheduleContainer);