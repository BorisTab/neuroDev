import React, {PureComponent} from 'react';
import './EvaluatedUser.css';

export default class EvaluatedUser extends PureComponent {
  render() {
    const {name, avatar, uid, userClick} = this.props;
    return (
      <div className="user_evaluated" id={uid} onClick={userClick}>
        <img src={avatar} alt=""/>
        <p className="name_user_evaluated">{name}</p>
      </div>
    );
  }
}
