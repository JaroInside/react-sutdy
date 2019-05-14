import React, { Component } from 'react';

class calendarItem extends Component {
  render() {
    const { number, cls } = this.props;
    return <li className={cls}>{`${number} 일`}</li>;
  }
}

export default calendarItem;
