import React, { Component } from 'react';
import CalendarItem from './calendarItem';
import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastDate: null,
    };
  }

  componentDidMount() {
    const nowDate = new Date();
    const nowY = nowDate.getFullYear();
    const nowM = nowDate.getMonth();
    const lastDate = 32 - new Date(nowY, nowM, 32).getDate();
    console.log(nowY);
    console.log(nowM);
    console.log(lastDate);

    this.setState({
      lastDate,
    });
  }

  render() {
    const { lastDate } = this.state;
    const nowDate = new Date();
    const nowY = nowDate.getFullYear();
    const nowM = nowDate.getMonth();
    const beforeDays = new Date(nowY, nowM, 1).getDay();
    return (
      <>
        <h1>캘린더</h1>
        <ul className="calendar">
          {Array.from({ length: beforeDays }, (v, i) => (
            <li key={`blank_${i}`}>0</li>
          ))}
          {Array.from({ length: lastDate }, (v, i) => {
            const n = i + 1;
            const day = new Date(nowY, nowM, n).getDay();
            let cls = 'normal';
            if (day === 0) cls = 'sun';
            if (day === 6) cls = 'sat';
            return <CalendarItem key={n} number={n} cls={cls} />;
          })}
        </ul>
      </>
    );
  }
}

export default Calendar;
