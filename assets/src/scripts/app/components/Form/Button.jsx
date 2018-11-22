import React, {Component} from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export default class Button extends Component {
  render () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}>Button</button>
    );
  }
}
