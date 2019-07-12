import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.css';

import Header from 'components/Header';
import Cards from 'components/Cards';
import Evaluated from 'components/Evaluated';
import Sidebar from 'components/Sidebar';
import LoginForm from 'components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
      evaluatedCLickId: 0,
    };
  };

  handleAuth = () => {
    this.setState({
      authorized: true,
    });
  };

  handleUserClick = (e) => {
    e.persist();
    const evalId = 4;
    this.setState({
      evaluatedCLickId: evalId,
    });
    console.log(e.currentTarget.id, this.state.evaluatedCLickId, evalId);
  };

  render() {
    if (this.state.authorized) {
      return (
        <div className="app">
          <Header/>
          <div className="content">
            <Cards/>
            <Evaluated userClick={this.handleUserClick}/>
            <Sidebar evalId={this.state.evaluatedCLickId}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <LoginForm handleAuth={this.handleAuth}/>
        </div>
      );
    }
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
