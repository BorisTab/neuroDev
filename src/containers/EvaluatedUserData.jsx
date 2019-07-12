import React, {Component} from 'react';
import EvaluatedUser from 'components/Evaluated/EvaluatedUser';

export default class EvaluatedUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluatedUser: [],
    };
  }

  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    fetch(`http://${serverIp}/eval/get/`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            evaluatedUser: response.message.contacts,
          });
        })
        .catch((error) => console.log(error));
  };

  render() {
    const base64 = 'data:image/png;base64,';
    const {userClick} = this.props;
    return (
      <div className="evaluated">
        {this.state.evaluatedUser.map((user) => <EvaluatedUser
          key={user.uid}
          uid={user.uid}
          name={user.name}
          avatar={base64 + user.avatar}
          userClick={userClick}
        />)}
      </div>
    );
  }
}
