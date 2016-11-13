import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { sendNews } from '../../actions/index.js';

class NewsForm extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		let { fields: { title, text }, handleSubmit } = this.props;

		return (
			<div className="news-form my-box"> 
				<form onSubmit={handleSubmit(this.props.sendNews)}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Название новости" {...title} />
					</div>

					<div className="form-group">
				    	<textarea className="form-control" placeholder="" {...text} />
				  	</div>

					<button type="submit" onClick={this.getDate.bind(this)} className="btn btn-info"> Добавить </button>
				</form>
			</div>
		)
	}

	getDate() {
		/*setTimeout(function() {this.props.showForm(false);}, 2000);*/
		
		/*const date = new Date();

		this.setState({ date: date})
		console.log(date);*/
	}
}

export default NewsForm = reduxForm({
  form: 'newsForm',
  fields: [ 'title', 'text' ]
}, null, { sendNews })(NewsForm);