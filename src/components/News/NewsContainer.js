import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsForm from './NewsForm.js';
import NewsList from './NewsList.js';

import { loadNews, deleteNews } from '../../actions/news.js';

import './News.scss';

class NewsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showingForm: false
		}

		this.toggleForm = this.toggleForm.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	componentWillMount() {
		this.props.loadNews();
	}

	render() {
		return (
			<div className="news-container">
				<h3> Какие то новости </h3>
				<h4> короче можете сюда анонимно что нибудь писать) </h4>
				<h4> пока это общее для всех ресторанов, дальше решим =) </h4>

				<button onClick={this.toggleForm} className="btn btn-success"> Написать </button>

				{this.state.showingForm ? <NewsForm showForm={this.showForm}/> : null }

				<NewsList data={this.props.loadNewsData} delete={this.props.deleteNews}/>
			</div>
		)
	}

	toggleForm() {
		this.setState({ showingForm: !this.state.showingForm })
	}

	showForm(bool) {
		this.setState({ showingForm: bool })
	}
}

function mapStateToProps(state) {
	return {
		loadNewsData: state.loadNews[0]

	}
}

export default connect(mapStateToProps, { loadNews, deleteNews })(NewsContainer);