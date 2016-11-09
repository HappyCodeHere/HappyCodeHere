import React, { Component } from 'react';

import NewsItem from './NewsItem';

class NewsList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let data = this.props.data || {};
		let news = Object.keys(data).reverse().map( news => {
			let { title, text } = data[news];
			let date = data[news].date
			return <NewsItem key={news} title={title} text={text} date={date} id={news} delete={this.props.delete}/>

		});

		return (
			<div className="news-list"> 
				{news}
			</div>
			
			
		)
	}
}

export default NewsList;