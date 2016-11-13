import React from 'react';


const NewsItem = (props) => {
	return (
		<div className="news-item my-box">
			<h5> {props.title} </h5>
			<p> {props.text} </p>
			{/*<p className="date"> {props.date} </p>*/}
			{/*<button onClick={deleteItem} className="btn btn-danger"> X </button>*/}
		</div>
	)

	function deleteItem() {
 		props.delete(props.id)
 	}
}


export default NewsItem;