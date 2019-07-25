import React, {Component} from 'react';

export default class CurrentUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      age: '',
      email: '',
      avatar: 'data:image/png;base64,',
    };
  }

  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    fetch(`/user/get/`, {
      // mode: 'cors',
      withCredentials: true,
      credentials: 'include',
    })
        .then((response) => response.json())
        .then((response) => {
          const currentUser = response.message;
          const {getAvatar} = this.props;
          console.log(currentUser);
          this.setState({
            name: currentUser.name,
            surname: currentUser.surname,
            age: currentUser.age,
            email: currentUser.email,
            avatar: this.state.avatar + currentUser.avatar,
          }, getAvatar(this.state.avatar));
        })
        .catch((error) => console.log(error));
  }
  render() {
    const {property} = this.props;
    return (
      <div>{this.state[property]}</div>
    );
  }
}
