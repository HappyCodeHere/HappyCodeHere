import React, { Component } from 'react';


import ScheduleItem from './ScheduleItem.js';

class ScheduleList extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		let schedule;
		let data = this.props.data;

		if ( Object.keys(data).length !=  0 ) {

			/*console.log('week', this.props.week)*/
			let one;
			if (Object.keys(data)[this.props.week] !== undefined) {
				one = Object.keys(data)[this.props.week];
				data = data[one];
			} else {
				data = {};
			}

			/*console.log(data)*/

			/*console.log(data);
			console.log(one);*/

			/*data1 = data.shift();

			console.log(data1);*/

			/*let data1 = data.slice();
			data1 = data1.shift();
			console.log(data1);
			console.log(data);

			if(data[0].name) {
				console.log(this.props.changeTitle);
				console.log(data[0].name);
				this.props.changeTitle(data[0].name);
				data.shift();
			}*/

			

			schedule = Object.keys(data)

			.filter( item => {
				/*console.log('hey')*/
				/*console.log(data[item])*/
				let item2 = data[item]['Имя'].toLowerCase();


				return item2.indexOf(this.props.currentSearch.toLowerCase()) !=-1;
			})

			

			.map ( item => {
				let { Имя, Номер, пн, вт, ср, чт, пт, сб, вс } = data[item];
				if (Номер == undefined) {
					Номер =  '-'
				}

				/*console.log('ll;l;', Object.keys(data).length);*/
				/*console.log(data[item]);
				console.log(name);*/


				return <ScheduleItem 
					key ={item}

					name={Имя}

					number={this.props.checkbox ? Номер : null}

					
					mon={пн}
					tue={вт}
					wed={ср}
					thu={чт}
					fri={пт}
					sat={сб}
					sun={вс}
					
				/>
			})

			if ( Object.keys(data).length == 0 ) {
				/*schedule = <ScheduleItem data={true} />
				<td> Расписания пока нету:( </td>
					data={Object.keys(data).length == 0 ? true : null}*/

				schedule = 'lll';
			}
		}

		return (
			<div className="schedule-list">
				<table className="table table-hover my-box">
				 	<thead>
				 		<tr>
				 			<th> Имя </th>
				 			{this.props.checkbox ? <th> Телефон </th> : null}
					 		<th> Понедельник </th>
					 		<th> Вторник </th>
					 		<th> Среда </th>
					 		<th> Четверг </th>
					 		<th> Пятница </th>
					 		<th> Суббота </th>
					 		<th> Воскресенье </th>
					 		
				 		</tr>
				 	</thead>
				 	<tbody>
				 		{schedule == 'lll' ? <tr><td className="colspan" colSpan={this.props.checkbox ? 9 : 8}> Расписания пока нету:( </td></tr> : schedule ? schedule: <tr><td className="colspan" colSpan={this.props.checkbox ? 9 : 8}> Расписание загружается... </td></tr> }
				 	</tbody>
				</table>
			</div>
		)
	}
}



export default ScheduleList;