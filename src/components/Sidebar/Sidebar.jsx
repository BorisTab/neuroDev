import React, {PureComponent} from 'react';
import './Sidebar.css';

import ParamSlider from 'components/ParamSlider';

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
    const paramsName = ['Partnership', 'Joint', 'Responsibility', 'Kindness',
      'Trust', 'Anger', 'Irritability',
      'Compliance', 'Sociopathy', 'Isolation'];
    if (this.state.evalId) {
      return (
        <div className="sidebar">
          <form className="sidebarForm">
            <div className="params">
              {paramsName.map((paramName) => <ParamSlider
                key={paramsName.indexOf(paramName)} name={paramName}/>)}
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
