import React, {PureComponent} from 'react';
import CurrentUserData from 'containers/CurrentUserData';

export default class CurrentUser extends PureComponent {
  render() {
    const {menuClick} = this.props;
    return (
      <div className="currentUser" onClick={menuClick}>
        <div className="name"><CurrentUserData property="name"/></div>
        <label htmlFor="avatar" className="avatar">
          <img src="https://via.placeholder.com/50/0000FF/808080%20?Text=User" alt=""/>
        </label>
      </div>
    );
  }
}
