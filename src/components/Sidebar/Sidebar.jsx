import React, {PureComponent} from 'react';
import './Sidebar.css';

export default class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      evalId: 0,
    };
  }
  componentDidMount() {
    this.setState((state, props) => ({
      evalId: props.evalId,
    }));
  }
  render() {
    console.log(this.state.evalId);
    if (this.state.evalId) {
      return (
        <div className="sidebar">
          <form className="sidebarForm">
            <div className="params">
              <div className="paramSlider">
                <h3>Partnership</h3>
                <input className="slider"
                  type="range" min='0' max='10' value="0"/>
                <p className="value">0</p>
              </div>
              <input className="uidToServer"
                type="hidden" value={this.state.evalId}/>
            </div>
            <input type="submit" value="Send" className="submitButton"/>
          </form>
        </div>
      );
    } else return null;
  }
}
