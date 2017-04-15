import React, { Component, PropTypes } from 'react';


const propTypes = {

}

class ScheduleSearch extends Component {
	constructor(props) {
		super(props)

		this.state = {
			search: ''
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillMount() {
		let local = localStorage.getItem('search');
		// console.log(local);
		if(local) {
			this.setState({search: local},  () => this.props.search(this.state.search));
		}

		let urlName = window.location.search.substring(6, );
		urlName = decodeURIComponent(urlName);
		if(urlName) {
			this.setState({search: urlName},  () => this.props.search(this.state.search));
			localStorage.setItem('search', urlName);
		}

	}


	render() {
		return (
			<div className="schedule-search">
				<input value={this.state.search || this.props.bs} onChange={this.handleSearch} className="form-control" placeholder="Поиск"/>
				<p>Поиск сохраняет данные ;) </p>
			</div>
		)
	}

	handleSearch(event) {
		localStorage.setItem('search', event.target.value);
		this.setState({search: event.target.value}, () => this.props.search(this.state.search));
	}
}

ScheduleSearch.propTypes = propTypes;

export default ScheduleSearch;
