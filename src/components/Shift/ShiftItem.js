import React from 'react';


 const ShiftItem = (props) => {
	return (
		<div className="shift-item">
			<ul>
				<li> {props.date} </li>
				<li> {props.position} </li>
				<li> {props.time}</li>
			</ul>
		</div>
	)
}


export default ShiftItem;
