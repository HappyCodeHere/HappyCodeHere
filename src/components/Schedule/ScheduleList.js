import React, { Component, PropTypes } from 'react';


import ScheduleItem from './ScheduleItem.js';

const propTypes = {
	schedule: PropTypes.array.isRequired
}

class ScheduleList extends Component {
	constructor(props) {
		super(props)
	}

	renderTableHead() {
		const { schedule } = this.props;

		const { пн, вт, ср, чт, пт, сб, вс } = schedule[1].fullDate;

		console.log(schedule[2].fullDate)

		return (
			<thead>
		 		<tr>
		 			<th>Имя</th>
		 			{this.props.checkbox ? <th>Телефон</th> : null}

			 		<th>{пн}</th>
			 		<th>{вт}</th>
			 		<th>{ср}</th>
			 		<th>{чт}</th>
			 		<th>{пт}</th>
			 		<th>{сб}</th>
			 		<th>{вс}</th>
		 		</tr>
		 	</thead>
		 )
	}


	renderTableBody() {
		const { schedule } = this.props;

		let list = schedule

		// .filter(item => {
		// 	console.log('ll;l;', item);
		// 	console.log(schedule[item]);
		// 	window.myObj = schedule[item];
		// 	console.log(schedule[item]['Имя']);
		// 	let item2 = schedule[item]['Имя'].toLowerCase();
		// 	// let item2 = schedule[item]['Имя'];

		// 	return item2.indexOf(this.props.currentSearch.toLowerCase()) !=-1;
		// })

		.map((item, i) => {
			console.log(item);
			let { Имя, Телефон, пн, вт, ср, чт, пт, сб, вс } = item;
			if (Телефон === undefined) {
				Телефон =  '-'
			}

			return <ScheduleItem 
				key ={i}

				name={Имя}

				number={this.props.checkbox ? Телефон : null}

				mon={пн}
				tue={вт}
				wed={ср}
				thu={чт}
				fri={пт}
				sat={сб}
				sun={вс}
			/>
		});



		// if ( Object.keys(schedule).length == 0 ) {
		// 	/*schedule = <ScheduleItem data={true} />
		// 	<td> Расписания пока нету:( </td>
		// 		data={Object.keys(data).length == 0 ? true : null}*/
		// 		// {list == 'lll' ? <tr><td className="colspan" colSpan={this.props.checkbox ? 9 : 8}> Расписания пока нету:( </td></tr> : schedule ? schedule: <tr><td className="colspan" colSpan={this.props.checkbox ? 9 : 8}> Расписание загружается... </td></tr> }

		// 	list = 'lll';
		// }

		return (
			<tbody>
				{list}
			</tbody>
		)
	}

	render() {
		return (
			<div className="schedule-list">
				<table className="table table-hover my-box">
					{this.renderTableHead()}
					{this.renderTableBody()}
				</table>
			</div>
		)
	}
}


ScheduleList.propTypes = propTypes;


export default ScheduleList;