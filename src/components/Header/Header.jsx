import React, {Component} from 'react';
import './Header.css';
import CurrentUser from './CurrentUser';
import DropDownMenu from 'components/DropDownMenu';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCheck: false,
    };
  }

  handleMenuChange = () => {
    this.setState({
      menuCheck: !(this.state.menuCheck),
    });
  }

  render() {
    const {menuCheck} = this.state;
    return (
      <header className="navigation">
        <span className="title">NeuroDev</span>
        <CurrentUser menuClick={this.handleMenuChange}/>
        <DropDownMenu menuCheck={menuCheck}/>
      </header>
    );
  }
};
