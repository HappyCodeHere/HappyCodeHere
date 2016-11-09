import { combineReducers } from 'redux';

import DateReducer from './DateReducer';
import SuggestReducer from './SuggestReducer';

import NewsReducer from './NewsReducer';
import ScheduleReducer from './ScheduleReducer';
import TimesReducer from './TimesReducer';

import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  loadDate: DateReducer,
  loadSuggest: SuggestReducer,

  loadNews: NewsReducer,
  loadSchedule: ScheduleReducer,
  loadTimes: TimesReducer,

  form: formReducer,
});

export default rootReducer;