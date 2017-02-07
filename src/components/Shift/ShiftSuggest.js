import React, { Component } from 'react';

import { RelativeLink } from 'react-router-relative-links';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import toastr from 'toastr';

import { sendSuggest } from '../../actions/shift.js';


import {reduxForm} from 'redux-form';

class ShiftSuggest extends Component {
	constructor(props) {
		super(props);

		this.handleFormSuccess = this.handleFormSuccess.bind(this);
	}

	render() {
		const {
	      fields: { date, position, time, name, number, comments },
	      handleSubmit } = this.props;

	    let dateObj = new Date();
	    let day = dateObj.getDate();
		let month = dateObj.getMonth() + 1;
		let fullDate = day + "/" + month;

		return (
			<div className="shift-suggest my-box">
				<h3> Предложить поработать </h3>

				<form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSuccess)}>

				  <div className={`form-group ${date.touched && date.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="date" className="col-sm-2 control-label">Дата:</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="date" placeholder={fullDate} {...date}/>
				    </div>
				    {date.touched && date.error && <div className="form-error">{date.error}</div>}
				  </div>

				  <div className={`form-group ${position.touched && position.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="position" className="col-sm-2 control-label">Позиции:</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="position" placeholder="K, LL" {...position}/>
				    </div>
				    {position.touched && position.error && <div className="form-error">{position.error}</div>}
				  </div>

				  <div className={`form-group ${time.touched && time.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="time" className="col-sm-2 control-label">Время:</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="time" placeholder="07:00 - 24:00" {...time}/>
				    </div>
				    {time.touched && time.error && <div className="form-error">{time.error}</div>}
				  </div>

				  <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="name" className="col-sm-2 control-label">Имя:</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="name" placeholder="Валера" {...name}/>
				    </div>
				    {name.touched && name.error && <div className="form-error">{name.error}</div>}
				  </div>

				  <div className={`form-group ${number.touched && number.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="number" className="col-sm-2 control-label">Телефон:</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="number" placeholder="375294444444" {...number}/>
				    </div>
				    {number.touched && number.error && <div className="form-error">{number.error}</div>}
				  </div>

				  <div className={`form-group ${comments.touched && comments.invalid ? 'has-error' : ''}`}>
				    <label htmlFor="comments" className="col-sm-2 control-label">Комментарии:</label>
				    <div className="col-sm-10">
				      <textarea className="form-control" id="comments" placeholder="что нибудь" {...comments} />
				    </div>
				    {comments.touched && comments.error && <div className="form-error">{comments.error}</div>}
				  </div>

				  <button type="submit" className="btn btn-info"> Создать замену </button>
				  <RelativeLink to=".." className="btn btn-danger"> Назад </RelativeLink>

				</form>
			</div>
		)
	}

	handleFormSuccess(data) {
		this.props.sendSuggest(data);
		toastr.success( 'Предложение опубликовано!', 'Готово');
		setTimeout( () => { browserHistory.push('/') }, 2000)
	}
};


function validate(values) {
	const errors = {}

	if (!values.date) {
		errors.date = 'Необходимо ввести дату';
	} else if (values.date.length != 5) {
    	errors.date = 'Дата должна быть вида xx/xx';
  	}

	if (!values.position) {
		errors.position = 'Необходимо ввести позицию';
	}

	if (!values.time) {
		errors.time = 'Необходимо ввести время';
	} else if (values.time.length <= 5 || values.time.length >= 14) {
    	errors.time = 'Время должно состоять минимум из 5 и максимум из 14 символов';
    }

	if (!values.name) {
		errors.name = 'Необходимо ввести имя';
	}

	if (!values.number) {
		errors.number = 'Необходимо ввести телефон';
	}

	if (!values.comments) {
		errors.comments = 'а сюда что-нибудь написать;)';
	}

	return errors
}

export default ShiftSuggest = reduxForm({
  form: 'suggest',
  fields: [ 'date', 'position', 'time', 'name', 'number', 'comments' ],
  validate
}, null, { sendSuggest })(ShiftSuggest);
