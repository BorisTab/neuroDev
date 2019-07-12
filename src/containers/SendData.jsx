import {Component} from 'react';

export default class SendData extends Component {
  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    const {data, sendToFalse, handler, handleAuth} = this.props;
    fetch(`http://${serverIp}/${handler}`, {
      mode: 'cors',
      method: 'post',
      body: data,
    })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 'Error') {
            alert(response.message);
            sendToFalse();
          }
          if (response.status === 'Ok') handleAuth();
        })
        .catch((error) => console.log(error));
  }
  render() {
    return null;
  }
}
