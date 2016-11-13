import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { sendTimes } from '../../actions/index.js';

class TimesForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { fields: { name, mon, tue, wed, thu, fri, sat, sun, comments }, handleSubmit } = this.props;

		return (
			<div className="times-form my-box">
				<form onSubmit={handleSubmit(this.props.sendTimes)}>
					<div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
						<label htmlFor="name" className="control-label">Имя:</label>
						<input type="text" className="form-control" id="name" placeholder="" {...name} />
						{name.touched && name.error && <div className="form-error">{name.error}</div>}
					</div>

					<table className="table">
						<thead>
							<tr>
								<th> Понедельник </th>
								<th> Вторник </th>
								<th> Среда </th>
								<th> Четверг </th>
								<th> Пятница </th>
								<th> Суббота </th>
								<th> Воскресенье </th>
							</tr>
						</thead>
						<tbody>
							<tr> 
								<td>
									<div className={`form-group ${mon.touched && mon.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...mon} />
									</div>
								</td>
								<td>			
									<div className={`form-group ${tue.touched && tue.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...tue} />
									</div>
								</td>
								<td>				
									<div className={`form-group ${wed.touched && wed.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...wed} />
									</div>
								</td>
								<td>				
									<div className={`form-group ${thu.touched && thu.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...thu} />
									</div>
								</td>
								<td>
									<div className={`form-group ${fri.touched && fri.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...fri} />
									</div>
								</td>
								<td>								
									<div className={`form-group ${sat.touched && sat.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...sat} />
									</div>
								</td>
								<td>				
									<div className={`form-group ${sun.touched && sun.invalid ? 'has-error' : ''}`}>
										<input type="text" className="form-control" placeholder="" {...sun} />
									</div>
								</td>
							</tr> 
						</tbody> 
					</table>

					<div className={`form-group ${comments.touched && comments.invalid ? 'has-error' : ''}`}>
						<label htmlFor="comments" className="control-label">Комментарии:</label>
						<textarea type="text" className="form-control" id="comments" placeholder="" {...comments} />
						{comments.touched && comments.error && <div className="form-error">{comments.error}</div>}
					</div>

					<button type="submit" className="btn btn-info"> Добавить </button>
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {}

	if (!values.name) {
		errors.name = 'Необходимо ввести имя и фамилию';
	}


	if (!values.mon) {
		errors.mon = '-';
	}

	if (!values.tue) {
		errors.tue = '-';
	}

	if (!values.wed) {
		errors.wed = '-';
	}

	if (!values.thu) {
		errors.thu = '-';
	}

	if (!values.fri) {
		errors.fri = '-';
	}

	if (!values.sat) {
		errors.sat = '-';
	}

	if (!values.sun) {
		errors.sun = '-';
	}

	if (!values.comments) {
		errors.comments = 'и что-нибудь написать сюда;)';
	}

	return errors
}

export default TimesForm = reduxForm({
  form: 'timesForm',
  fields: [ 'name', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'comments' ],
  validate
}, null, { sendTimes })(TimesForm);