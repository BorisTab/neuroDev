import React, {PureComponent} from 'react';
import './DropDownMenu.css';

import CurrentUserData from'containers/CurrentUserData';

export default class DropDownMenu extends PureComponent {
  render() {
    const {menuCheck} = this.props;
    if (menuCheck) {
      return (
        <ul className="drop_down_menu">
          <li className="drop_down_menu_li">
            <span className="drop_down_menu_href">
              <CurrentUserData property="age"/>
            </span>
          </li>
          <li className="drop_down_menu_li">
            <span className="drop_down_menu_href">
              <CurrentUserData property="email"/>
            </span>
          </li>
          <li className="drop_down_menu_li getPremium">
            <a className="drop_down_menu_href" href="#">Get premium</a>
          </li>
          <li className="drop_down_menu_li drop_down_menu_li_button">
            <a className="drop_down_menu_href" href="#">Settings</a>
          </li>
          <li className="drop_down_menu_li drop_down_menu_li_button">
            <a className="drop_down_menu_href" href="#">Sing out</a>
          </li>
        </ul>
      );
    } else return null;
  }
}
