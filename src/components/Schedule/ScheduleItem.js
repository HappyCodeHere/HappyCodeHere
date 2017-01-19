import React, { PropTypes } from 'react';

// const propTypes = {
// 	name: PropTypes.string.isRequired,
// 	number: PropTypes.string,
// 	mon: PropTypes.string.isRequired,
// 	tue: PropTypes.string.isRequired,
// 	wed: PropTypes.string.isRequired,
// 	thu: PropTypes.string.isRequired,
// 	fri: PropTypes.string.isRequired,
// 	sat: PropTypes.string.isRequired,
// 	sun: PropTypes.string.isRequired
// };

const ScheduleItem = (props) => {
	const { name, number, mon, tue, wed, thu, fri, sat, sun } = props;
	return (
		<tr className="schedule-item"> 
			<td>{name}</td>
			{number ? <td>{number}</td> : null}
			<td>{mon}</td>
			<td>{tue}</td>
			<td>{wed}</td>
			<td>{thu}</td>
			<td>{fri}</td>
			<td>{sat}</td>
			<td>{sun}</td> 
		</tr>
	)
}

// ScheduleItem.propTypes = propTypes;

export default ScheduleItem;