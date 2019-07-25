import React, {Component} from 'react';
import CurrentUserData from 'containers/CurrentUserData';

export default class CurrentUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
    };
  }
  getAvatar = (data) => {
    this.setState({
      avatar: data,
    });
  };
  render() {
    const {menuClick} = this.props;
    return (
      <div className="currentUser" onClick={menuClick}>
        <div className="name"><CurrentUserData property="name" getAvatar={this.getAvatar}/></div>
        <label htmlFor="avatar" className="avatar">
          <img src={this.state.avatar} alt=""/>
        </label>
      </div>
    );
  }
}
