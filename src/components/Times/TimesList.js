import React, { Component } from 'react';


import TimesItem from './TimesItem.js';

class TimesList extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		let data = this.props.data || {}

		let list = Object.keys(data).map( item => {
			let { name, mon, tue, wed, thu, fri, sat, sun, comments } = data[item]
			return <TimesItem 
				key={item}

				name={name}
				mon={mon}
				tue={tue}
				wed={wed}
				thu={thu}
				fri={fri}
				sat={sat}
				sun={sun}
				comments={comments}

				id={item}
				delete={this.props.delete}
			/>

		});

		return (
			<div className="times-list">
				<table className="table my-box">
					<thead>
						<tr>
							<th> Имя </th>

							<th> Понедельник </th>
							<th> Вторник </th>
							<th> Среда </th>
							<th> Четверг </th>
							<th> Пятница </th>
							<th> Суббота </th>
							<th> Воскресенье </th>

							<th> Комментарии </th>
							<th>  </th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</table>
			</div>
		)
	}
}



export default TimesList;