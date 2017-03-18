import React, { PropTypes } from 'react';

const propTypes = {

}

const SendScheduleItem = (props) => {
  const { id, scheduleId } = props;
  return (
    <div className="send-schedule-container-item">
      {id+1}. {scheduleId}
      <button className="btn btn-danger" onClick={() => { props.delete(scheduleId)}}>x</button>
    </div>
  )
}

SendScheduleItem.propTypes = propTypes;

export default SendScheduleItem;
