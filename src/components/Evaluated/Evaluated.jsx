import React, {PureComponent} from 'react';
import './Evaluated.css';

import EvaluatedUserData from 'containers/EvaluatedUserData';

export default class Evaluated extends PureComponent {
  render() {
    const {userClick} = this.props;
    return (
      <div className="evaluated">
        <EvaluatedUserData userClick={userClick}/>
      </div>
    );
  }
}
