import React, {Component} from 'react';
import './ParamSlider.css';

export default class ParamSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const {name} = this.props;
    return (
      <div className="paramSlider">
        <h3>{name}</h3>
        <input className="slider"
          type="range" min="0" max="10"
          value={this.state.value} onChange={this.handleChange}/>
        <p className="value">{this.state.value}</p>
      </div>
    );
  }
}
