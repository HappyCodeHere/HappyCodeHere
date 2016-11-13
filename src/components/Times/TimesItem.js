import React from 'react';


 const TimesItem = (props) => {
	return (
		<tr className="times-item">
			<td> {props.name} </td>
			<td> {props.mon} </td>
			<td> {props.tue} </td>
			<td> {props.wed} </td>
			<td> {props.thu} </td>
			<td> {props.fri} </td>
			<td> {props.sat} </td>
			<td> {props.sun} </td>
			<td> {props.comments} </td>
			<td> <button onClick={deleteItem} className="btn btn-danger"> X </button> </td>
		</tr>
	)

	function deleteItem() {
 		props.delete(props.id)

 	}
}


export default TimesItem;
