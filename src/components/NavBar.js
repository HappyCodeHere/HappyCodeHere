import React from 'react';
import { RelativeLink } from 'react-router-relative-links';

const NavBar = () => {
  function checkUrl() {
    var url = window.location.href;
    var pathArray = window.location.pathname.split( '/' );
    var secondLevelLocation = pathArray[1];
    if (secondLevelLocation == 'kamenka'  ||
      secondLevelLocation == 'puskari' ||
      secondLevelLocation == 'nemiga'  ||
      secondLevelLocation == 'vokzal'  ||
      secondLevelLocation == 'airport' ||
      secondLevelLocation == 'stolitsa'  ||

      secondLevelLocation == 'uruche'  ||

      secondLevelLocation == 'prostore' ) {
      /*console.log(secondLevelLocation);*/
      return true
    }
    return false
  }

  function checkUrl2() {
    var url = window.location.href;
    var pathArray = window.location.pathname.split( '/' );
    var secondLevelLocation = pathArray[1];
    return secondLevelLocation
  }

  /*console.log('func', checkUrl())*/

	return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <RelativeLink to="/" className="navbar-brand"> На главную </RelativeLink>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><RelativeLink to={checkUrl() ? `${checkUrl2()}/shift` : '/'} className="mdl-layout__tab is-active" activeClassName={window.location.pathname == '/' ? '' : 'navbar-link'}> Замены </RelativeLink></li>
            <li><RelativeLink to={checkUrl() ? `${checkUrl2()}/times` : '/'} className="mdl-layout__tab is-active"activeClassName={window.location.pathname == '/' ? '' : 'navbar-link'}> Заказать выходные </RelativeLink></li>
            <li><RelativeLink to={checkUrl() ? `${checkUrl2()}/schedule` : '/'} className="mdl-layout__tab is-active" activeClassName={window.location.pathname == '/' ? '' : 'navbar-link'}> Расписание </RelativeLink></li>
            <li><RelativeLink to={checkUrl() ? `${checkUrl2()}/news` : '/'} className="mdl-layout__tab is-active" activeClassName={window.location.pathname == '/' ? '' : 'navbar-link'}> Новости </RelativeLink></li>
          </ul>
        </div>
      </div>
    </nav>

	);

}

export default NavBar;
