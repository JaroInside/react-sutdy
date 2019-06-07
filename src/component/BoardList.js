import React, { Component } from 'react';

class BoardList extends Component {
  state = {};

  render() {
    const { firstName, lastName, num, buttonBool, toggle } = this.props;
    return (
      <li>
        <span>{num}</span>
        <span>{lastName}</span>
        <span>{firstName}</span>
        <button type="button" onClick={toggle}>
          {buttonBool ? 'Y' : 'N'}
        </button>
      </li>
    );
  }
}

export default BoardList;
