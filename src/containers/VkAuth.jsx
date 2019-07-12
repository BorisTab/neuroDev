import {Component} from 'react';

export default class VkAuth extends Component {
  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    const {handleAuth} = this.props;
    fetch(`http://${serverIp}/vk/connect/`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 'Ok') handleAuth();
        })
        .catch((error) => console.log(error));
  }
  render() {
    return null;
  }
}
