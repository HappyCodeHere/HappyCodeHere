import React, { Component } from 'react';
import { connect } from 'react-redux';
import XLSX  from 'xlsx';


import { sendSchedule } from '../../actions/schedule.js';

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
		this.handleInputFile = this.handleInputFile.bind(this);


	}

	render() {
		return (
			<div className="send-schedule-container">
				<input value={this.state.password} onChange={this.handleInput} />
				{this.state.password == '' ? 
					<div>
						<textarea value={JSON.stringify(this.state.schedule2)} onChange={this.handleTextarea}/>
						<input type="file" onChange={this.handleInputFile}/>
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
		this.props.sendSchedule((this.state.schedule), () => {
			console.log(this.state.schedule);
		});
	}

	handleInputFile(e) {
		var files = e.target.files;
		var i,f;
		var z;
		for (i = 0, f = files[i]; i != files.length; ++i) {
			var reader = new FileReader();
			var name = f.name;
			reader.onload = (e) => {
				var data = e.target.result;

				var workbook = XLSX.read(data, {type: 'binary'});

				/* DO SOMETHING WITH workbook HERE */
				var first_sheet_name = workbook.SheetNames[0];

				/* Get worksheet */
				var worksheet = workbook.Sheets[first_sheet_name];
				let exelJSON = XLSX.utils.sheet_to_json(worksheet);

				let totalSchedule = [];
			
				exelJSON.map((item)=> {
					let obj = {};
					obj.fullDate = {};
					if(Object.keys(item).length < 4 ) {
						return false;
					}
					else {
						Object.keys(item).map((item2) =>{
							if(item2.indexOf('.') !== -1) {
								// var str = item2.replace('.', '|');
								var str = item2.substring(0, 2);
								obj[str] = item[item2];
								obj['fullDate'][str] = item2;
							}
							else {
								obj[item2] = item[item2];
							}
						})
					};
					totalSchedule.push(obj);
					console.log(totalSchedule);
				});

				this.setState({ schedule: totalSchedule }, () => {
					console.log(this.state.schedule);
				});
	    	};
		reader.readAsBinaryString(f);
	  }
	}
}

export default connect(null, { sendSchedule })(SendScheduleContainer);