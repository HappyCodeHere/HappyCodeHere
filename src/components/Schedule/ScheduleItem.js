import React from 'react';


const ScheduleItem = (props) => {
	return (
		<tr className="schedule-item"> 
			<td> {props.name} </td>
			{props.number ? <td> {props.number} </td> : null}
			<td> {props.mon} </td>
			<td> {props.tue} </td>
			<td> {props.wed} </td>
			<td> {props.thu} </td>
			<td> {props.fri} </td>
			<td> {props.sat} </td>
			<td> {props.sun} </td> 
		</tr>
	)
}


export default ScheduleItem;