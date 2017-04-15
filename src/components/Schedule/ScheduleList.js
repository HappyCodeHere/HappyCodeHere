import React, { Component, PropTypes } from 'react';


import ScheduleItem from './ScheduleItem.js';

const propTypes = {
	schedule: PropTypes.array.isRequired,
	showNumber: PropTypes.bool.isRequired
}

class ScheduleList extends Component {

	renderTableHead() {
		const { schedule } = this.props;

		// console.log(schedule);


		const { пн, вт, ср, чт, пт, сб, вс } = schedule[7].fullDate;


		// console.log(schedule[2].fullDate)

		return (
			<thead>
		 		<tr>
		 			<th>Имя</th>
		 			{this.props.showNumber ? <th>Телефон</th> : null}

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
		// console.log(this.props.currentSearch);

		let list = schedule

		.filter(item => {
			// let item2 = schedule[item]['Имя'].toLowerCase();
			// if(!schedule[item]) return item;
			let item2 = item['Имя'].toLowerCase();

			return item2.indexOf(this.props.currentSearch.toLowerCase()) !=-1;
		})

		.map((item, i) => {
			// console.log(item);
			let { Имя, Телефон, пн, вт, ср, чт, пт, сб, вс } = item;
			let newNumber = Телефон;

			if (newNumber === undefined) {
				newNumber =  '-'
			}

			else {
				while(newNumber.indexOf('-') >= 0) {
					newNumber = newNumber.replace('-', '');
				}

				newNumber = newNumber.slice(-9);

				newNumber = `(${newNumber[0] + [newNumber[1]]}) ${newNumber.slice(2, 5)}-${newNumber.slice(5, 7)}-${newNumber.slice(7, 9)}`;
			}




			return <ScheduleItem
				key={i}

				name={Имя}

				number={this.props.showNumber ? newNumber : null}

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
