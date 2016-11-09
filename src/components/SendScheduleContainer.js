import React, { Component } from 'react';
import { connect } from 'react-redux';


import { sendSchedule } from '../actions/index.js';

class SendScheduleContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			schedule: '',
			password: ''
		}

		this.handleTextarea = this.handleTextarea.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInput = this.handleInput.bind(this);

	}

	render() {
		return (
			<div className="send-schedule-container">
				<input value={this.state.password} onChange={this.handleInput} />
				{this.state.password == 123 ? 
					<div>
						<textarea value={this.state.schedule} onChange={this.handleTextarea}/>
						<button onClick={this.handleButtonClick}> Отправить расписание </button> 
					</div> : null}
				
				
	
			</div>
		)
	}

	handleInput(event) {
		this.setState({ password: event.target.value});
		
	}

	handleTextarea(event) {
		this.setState({ schedule: event.target.value})
	}

	handleButtonClick() {
		this.props.sendSchedule(JSON.parse(this.state.schedule));
	}
}

export default connect(null, { sendSchedule })(SendScheduleContainer);