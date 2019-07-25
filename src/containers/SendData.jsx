import {Component} from 'react';
// import {get as getCookie} from 'es-cookie';
// import Cookies from 'universal-cookie';

export default class SendData extends Component {
  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    const {data, sendToFalse, handler, handleAuth, loadingToFalse} = this.props;
    // const csrftoken = getCookie('csrftoken');
    // const headers = new Headers();
    // headers.append('X-CSRFToken', csrftoken);
    // headers.append('Content-Type', 'application/json');

    fetch(`/${handler}`, {
      // mode: 'cors',
      method: 'post',
      body: data,
      withCredentials: true,
      credentials: 'same-origin',
    })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((response) => {
          if (response.status === 'Error') {
            sendToFalse();
            loadingToFalse();
          }
          if (response.status === 'Ok') handleAuth();
        })
        .catch((error) => console.log(error));}
  render() {
    // setInterval(() => console.log(document.cookie), 1000);
    console.log(document.cookie);
    return null;
  }
}
