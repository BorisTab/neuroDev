import React, {PureComponent} from 'react';
import './Cards.css';
// import Card from 'components/Card';
import RecommendationsData from 'containers/RecommendationsData';

export default class Cards extends PureComponent {
  render() {
    return (
      <RecommendationsData/>
    );
  }
}
