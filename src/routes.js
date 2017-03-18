import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';


import App from './components/App.js';
import Main from './components/Main.js';

import MainSelect from './components/MainSelect.js';

import SendScheduleContainer from './components/Schedule/SendScheduleContainer.js';

import ShiftContainer from './components/Shift/ShiftContainer.js';
import ShiftList from './components/Shift/ShiftList.js';
import ShiftInfo from './components/Shift/ShiftInfo.js';

import ShiftCreate from './components/Shift/ShiftCreate.js';
import ShiftSuggest from './components/Shift/ShiftSuggest.js';


import NewsContainer from './components/News/NewsContainer.js';
import ScheduleContainer from './components/Schedule/ScheduleContainer.js';
import TimesContainer from './components/Times/TimesContainer.js';


import NotFound from './components/NotFound.js';

/*kamenka
puskari
nemiga
vokzal
airport*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MainSelect} />


		<Route path="kamenka" component={Main} />
		<Route path="kamenka/shift" component={ShiftContainer} />
		<Route path="kamenka/shift/select" component={ShiftList} />
		<Route path="kamenka/shift/create" component={ShiftCreate} />
		<Route path="kamenka/shift/suggest" component={ShiftSuggest} />
		<Route path="kamenka/shift/select/:id" component={ShiftInfo} />


		<Route path="kamenka/news" component={NewsContainer} />
		<Route path="kamenka/schedule" component={ScheduleContainer} />
		<Route path="kamenka/times" component={TimesContainer} />

		<Route path="kamenka/sendschedule" component={SendScheduleContainer} />





		<Route path="puskari" component={Main} />
		<Route path="puskari/shift" component={ShiftContainer} />
		<Route path="puskari/shift/select" component={ShiftList} />
		<Route path="puskari/shift/create" component={ShiftCreate} />
		<Route path="puskari/shift/suggest" component={ShiftSuggest} />
		<Route path="puskari/shift/select/:id" component={ShiftInfo} />


		<Route path="puskari/news" component={NewsContainer} />
		<Route path="puskari/schedule" component={ScheduleContainer} />
		<Route path="puskari/times" component={TimesContainer} />

		<Route path="puskari/sendschedule" component={SendScheduleContainer} />




		<Route path="nemiga" component={Main} />
		<Route path="nemiga/shift" component={ShiftContainer} />
		<Route path="nemiga/shift/select" component={ShiftList} />
		<Route path="nemiga/shift/create" component={ShiftCreate} />
		<Route path="nemiga/shift/suggest" component={ShiftSuggest} />
		<Route path="nemiga/shift/select/:id" component={ShiftInfo} />


		<Route path="nemiga/news" component={NewsContainer} />
		<Route path="nemiga/schedule" component={ScheduleContainer} />
		<Route path="nemiga/times" component={TimesContainer} />

		<Route path="nemiga/sendschedule" component={SendScheduleContainer} />





		<Route path="vokzal" component={Main} />
		<Route path="vokzal/shift" component={ShiftContainer} />
		<Route path="vokzal/shift/select" component={ShiftList} />
		<Route path="vokzal/shift/create" component={ShiftCreate} />
		<Route path="vokzal/shift/suggest" component={ShiftSuggest} />
		<Route path="vokzal/shift/select/:id" component={ShiftInfo} />


		<Route path="vokzal/news" component={NewsContainer} />
		<Route path="vokzal/schedule" component={ScheduleContainer} />
		<Route path="vokzal/times" component={TimesContainer} />

		<Route path="vokzal/sendschedule" component={SendScheduleContainer} />



		<Route path="airport" component={Main} />
		<Route path="airport/shift" component={ShiftContainer} />
		<Route path="airport/shift/select" component={ShiftList} />
		<Route path="airport/shift/create" component={ShiftCreate} />
		<Route path="airport/shift/suggest" component={ShiftSuggest} />
		<Route path="airport/shift/select/:id" component={ShiftInfo} />


		<Route path="airport/news" component={NewsContainer} />
		<Route path="airport/schedule" component={ScheduleContainer} />
		<Route path="airport/times" component={TimesContainer} />

		<Route path="airport/sendschedule" component={SendScheduleContainer} />



		<Route path="stolitsa" component={Main} />
		<Route path="stolitsa/shift" component={ShiftContainer} />
		<Route path="stolitsa/shift/select" component={ShiftList} />
		<Route path="stolitsa/shift/create" component={ShiftCreate} />
		<Route path="stolitsa/shift/suggest" component={ShiftSuggest} />
		<Route path="stolitsa/shift/select/:id" component={ShiftInfo} />


		<Route path="stolitsa/news" component={NewsContainer} />
		<Route path="stolitsa/schedule" component={ScheduleContainer} />
		<Route path="stolitsa/times" component={TimesContainer} />

		<Route path="stolitsa/sendschedule" component={SendScheduleContainer} />



		<Route path="prostore" component={Main} />
		<Route path="prostore/shift" component={ShiftContainer} />
		<Route path="prostore/shift/select" component={ShiftList} />
		<Route path="prostore/shift/create" component={ShiftCreate} />
		<Route path="prostore/shift/suggest" component={ShiftSuggest} />
		<Route path="prostore/shift/select/:id" component={ShiftInfo} />


		<Route path="prostore/news" component={NewsContainer} />
		<Route path="prostore/schedule" component={ScheduleContainer} />
		<Route path="prostore/times" component={TimesContainer} />

		<Route path="prostore/sendschedule" component={SendScheduleContainer} />
		


		<Route path="uruche" component={Main} />
		<Route path="uruche/shift" component={ShiftContainer} />
		<Route path="uruche/shift/select" component={ShiftList} />
		<Route path="uruche/shift/create" component={ShiftCreate} />
		<Route path="uruche/shift/suggest" component={ShiftSuggest} />
		<Route path="uruche/shift/select/:id" component={ShiftInfo} />


		<Route path="uruche/news" component={NewsContainer} />
		<Route path="uruche/schedule" component={ScheduleContainer} />
		<Route path="uruche/times" component={TimesContainer} />

		<Route path="uruche/sendschedule" component={SendScheduleContainer} />






		{/*<Route path="/:id" component={ShiftInfo} />*/}

		{/*<Redirect from="" to="" />*/}

		<Route path='*' component={NotFound} />
	</Route>
);
