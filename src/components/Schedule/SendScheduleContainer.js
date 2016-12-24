import React, { Component } from 'react';
import { connect } from 'react-redux';
import XLSX  from 'xlsx';


import { sendSchedule } from '../../actions/index.js';

class SendScheduleContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			schedule: '',
			password: '',
			schedule2: null
		}

		this.handleTextarea = this.handleTextarea.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleInputFile = this.handleInputFile.bind(this);

		this.syntaxHighlight = this.syntaxHighlight.bind(this);

	}

	render() {
		return (
			<div className="send-schedule-container">
				<input value={this.state.password} onChange={this.handleInput} />
				{this.state.password == '' ? 
					<div>
						<textarea value={this.syntaxHighlight(JSON.stringify(this.state.schedule2))} onChange={this.handleTextarea}/>
						<input type="file" onChange={this.handleInputFile}/>
						<button onClick={this.handleButtonClick}> Отправить расписание </button> 
					</div> : null}
				
				
	
			</div>
		)
	}

	syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

	handleInput(event) {
		this.setState({ password: event.target.value});
		
	}

	handleTextarea(event) {
		this.setState({ schedule: event.target.value})
	}

	handleButtonClick() {
		this.props.sendSchedule((this.state.schedule2), () => {
			console.log(this.state.schedule2);
		});
	}

	handleInputFile(e) {
		console.log(e.target.files[0]);
		// const reader = new FileReader();
  //   	const file = e.target.files[0];
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
			var address_of_cell = 'A1';

			/* Get worksheet */
			var worksheet = workbook.Sheets[first_sheet_name];
			console.log(worksheet);
			console.log(XLSX.utils.sheet_to_json(worksheet));
			let needdata = XLSX.utils.sheet_to_json(worksheet);
			let needdata2 =[];
			let needdata3 = []
			needdata.map((item)=> {
				console.log(item);
				if(Object.keys(item).length < 3 ) {
					console.log(Object.keys(item).length);
					console.log('length', item);
					return
				}
				else {
					Object.keys(item).map((item2) =>{
						console.log(item2);
						if(item2 !== 'Имя' && item2 !== 'Номер') {
							console.log('here', item2);
							var str = item2.replace(".", "|");
							console.log(str);
						}
						console.log(needdata);
						console.log('item', item);
						console.log('item2', item2);
						console.log(item[item2]);
						// needdata3.push([item][str]) = item[item2];
						console.log('full obj', needdata3);
					})
				}

				// map по каждому объекту

				// if(item['Бланк мытья рук'] !== undefined) {
				// 	console.log('l;l;;l;', item);
				// 	return
				// }

				needdata2.push(item);

			})
			this.setState({ schedule2: needdata2 }, () => {
				console.log(this.state.schedule2);
			});
	    };
	    reader.readAsBinaryString(f);
	  }
	}
}

export default connect(null, { sendSchedule })(SendScheduleContainer);