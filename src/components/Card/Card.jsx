import React, {PureComponent} from 'react';
import './Card.css';

export default class Card extends PureComponent {
  render() {
    const {picture, text} = this.props;
    return (
      <div className="card">
        <div className="description">
          <p className="description_text">{text}</p>
        </div>
        <div className="map">
          <img src={picture} alt="1111111"/>
        </div>
      </div>
    );
  }
}
