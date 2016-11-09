import React, { Component } from 'react';
import { RelativeLink } from 'react-router-relative-links';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { loadDate, deleteDate, deleteSuggest, loadSuggest } from '../../actions/index.js';


class ShiftInfo extends Component {
	constructor(props) {
		super(props);

		this.redirect = this.redirect.bind(this);
	}

	componentWillMount() {
		this.props.loadDate();
	}

	render() {
		let id = this.props.params.id;
		console.log(id);
		let info = this.props.loading[id] || this.props.loadingSuggest[id] 
		return (
			<div className="shift-info my-box">
				<h3> Подробная информация </h3>
				<table className="table table-bordered">
					<tbody>
						<tr>
							<td>Дата:</td>
							<td>{info.date}</td>
						</tr>
						<tr>
							<td>Позиция:</td>
							<td>{info.position}</td>
						</tr>
						<tr>
							<td>Время:</td>
							<td>{info.time}</td>
						</tr>
						<tr>
							<td>Кто опубликовал:</td>
							<td>{info.name}</td>
						</tr>
						<tr>
							<td>Телефон:</td>
							<td>{info.number}</td>
						</tr>
						<tr>
							<td>Комментарии:</td>
							<td>{info.comments}</td>
						</tr>
					</tbody>
				</table>
				<button onClick={this.redirect} className="btn btn-warning"> Удалить </button>
				<RelativeLink to=".." className="btn btn-danger"> Назад </RelativeLink>
			</div>

		)
	}

	redirect() {
		toastr.error( 'Смена удалена!', 'Готово');
		this.props.deleteDate(this.props.params.id);
		this.props.deleteSuggest(this.props.params.id);
		setTimeout( () => { browserHistory.push('/') }, 2000);
		
	}
};

function mapStateToProps(state) {
	return {
		loading: state.loadDate[0],
		loadingSuggest: state.loadSuggest[0]
	};
}

export default connect(mapStateToProps, { loadDate, deleteDate, deleteSuggest, loadSuggest })(ShiftInfo);