import React, {Component} from 'react';
import power from '../../../../images/power-icon.svg';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export default class Button extends Component {
  render () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}>Button
        <img className="power-icon" src={power} width="40" alt="power icon"/>
      </button>
    );
  }
}
