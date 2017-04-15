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
			<td className={mon === 'вых' || mon ==='off' ? 'off' : ''}>{mon}</td>
			<td className={tue === 'вых' || tue ==='off' ? 'off' : ''}>{tue}</td>
			<td className={wed === 'вых' || wed ==='off' ? 'off' : ''}>{wed}</td>
			<td className={thu === 'вых' || thu ==='off' ? 'off' : ''}>{thu}</td>
			<td className={fri === 'вых' || fri ==='off' ? 'off' : ''}>{fri}</td>
			<td className={sat === 'вых' || sat ==='off' ? 'off' : ''}>{sat}</td>
			<td className={sun === 'вых' || sun ==='off' ? 'off' : ''}>{sun}</td>
		</tr>
	)
}

// ScheduleItem.propTypes = propTypes;

export default ScheduleItem;
