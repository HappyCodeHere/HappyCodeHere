import React, { Component } from 'react';


class ScheduleSearch extends Component {
	constructor(props) {
		super(props)

		this.state = {
			search: ''
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillMount() {
		let urlName = window.location.search.substring(6, );
		urlName = decodeURIComponent(urlName);
		this.setState({search: urlName},  () => this.props.search(this.state.search));
	}


	render() {
		
		return (
			<div className="schedule-search">
				<input value={this.state.search || this.props.bs} onChange={this.handleSearch} className="form-control" placeholder="Поиск"/>
			</div>
		)
	}

	handleSearch(event) {
		this.setState({search: event.target.value}, () => this.props.search(this.state.search));
		
	}

}


export default ScheduleSearch;