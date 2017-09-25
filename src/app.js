// Uncomment for tests, re-comment for build
// (there has to be an env config or something I'm missing...)
//import React from 'react';
//import { render } from 'react-dom';

// Kick off the app
/////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(event) {
	ReactDOM.render(
	  <Calendar />,
	  document.getElementById('root')
	);
});

// Config
/////////////////////////////////////////////////////////////////////////////

const LOCALE = "en-us";

// Our Components
/////////////////////////////////////////////////////////////////////////////

// Uncomment this for tests
//export default class Calendar extends React.Component {
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    var initialDate = this.props.date || new Date();
    this.state = {
      currentDate: getFirstDateOfMonth(initialDate),
      nextMonthName: getMonthName(nextMonth(initialDate)),
      currentMonthName: getMonthName(initialDate),
      previousMonthName: getMonthName(prevMonth(initialDate)),
      weeks: [],
      days: [],
    };
  }

  renderEventsForDay(date) {
    var events = []
    getEventsForDay(date).forEach(function (evt, i) {
      events.push(<Event key={i} time={evt.time} value={evt.value} />);
    });
    return events;
  }

  renderDaysForWeek(dates, month) {
    var days = dates.map((d) =>
      <Day
        key={d}
        date={d}
        dayOfMonth={d.getDate()}
        isThisMonth={d.getMonth() == month}
        events={this.renderEventsForDay(d)}
      />
    );
    this.state.days.push(days.map(function (d) {
      return d.props.isThisMonth;
    }));
    return days; 
  }

  renderWeeksForMonth() {
    this.state.weeks = [];
    var d = this.state.currentDate;
    var m = d.getMonth();

    // Get first week
    while (d.getDay() != 1) {
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
    }
    this.state.weeks.push(<Week key={d} days={this.renderDaysForWeek(getDatesOfWeek(d), m)} />);
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);

    // Get the rest of the weeks
    while (d.getMonth() == this.state.currentDate.getMonth()) {
      this.state.weeks.push(<Week key={d} days={this.renderDaysForWeek(getDatesOfWeek(d), m)} />);
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
    }
  }

  nextMonth() {
    var next = nextMonth(this.state.currentDate);
    this.setState({previousMonthName: getMonthName(prevMonth(next))});
    this.setState({currentMonthName: getMonthName(next)});
    this.setState({nextMonthName: getMonthName(nextMonth(next))});
    this.setState({currentDate: next});
  }

  previousMonth() {
    var prev = prevMonth(this.state.currentDate);
    this.setState({previousMonthName: getMonthName(prevMonth(prev))});
    this.setState({currentMonthName: getMonthName(prev)});
    this.setState({nextMonthName: getMonthName(nextMonth(prev))});
    this.setState({currentDate: prev});
  }

  render() {
    this.renderWeeksForMonth()
    return (
      <div>
        <div className="controls">
          <button onClick={() => this.previousMonth()}>{this.state.previousMonthName}</button>
          <div className="currentMonth">{this.state.currentMonthName} {this.state.currentDate.getFullYear()}</div>
          <button onClick={() => this.nextMonth()}>{this.state.nextMonthName}</button>
        </div>

        <div className="headers">
          <div className="dayHeader">Monday</div>
          <div className="dayHeader">Tuesday</div>
          <div className="dayHeader">Wednesday</div>
          <div className="dayHeader">Thursday</div>
          <div className="dayHeader">Friday</div>
          <div className="dayHeader">Saturday</div>
          <div className="dayHeader">Sunday</div>
        </div>

        {this.state.weeks}
      </div>
    );
  }
}

class Week extends React.Component {
  render() {
    return (
      <div className="week">
        {this.props.days}
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    return (
      <div className={"day " + (this.props.isThisMonth ? '' : 'notThisMonth')}>
        <div className="dayOfMonth ">{this.props.dayOfMonth}</div>
        <ul className="eventList">{this.props.events}</ul>
      </div>
    );
  }
}

class Event extends React.Component {
  render() {
    return (
      <li className="event">- {this.props.value}</li>
    );
  }
}

// Helper functions
/////////////////////////////////////////////////////////////////////////////

function getMonthName(date) {
  return date.toLocaleString(LOCALE, {month: "long"});
}

function nextMonth(date) {
  return advanceMonth(date, 1);
}

function prevMonth(date) {
  return advanceMonth(date, -1);
}

function advanceMonth(date, byMonths) {
  return new Date(date.getFullYear(), date.getMonth() + byMonths, 1);
}

function getFirstDateOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getDatesOfWeek(date) {
  var y = date.getFullYear(), m = date.getMonth(), d = date.getDate();
  var result = [];
  for (var i = 0; i < 7; i++) {
    result.push(new Date(y, m, d + i))
  }
  return result;
}

// Returns an array of event names for the day in chronological order
function getEventsForDay(date) {
  var events = [];
  apiResponse["items"].forEach(function (item) {
    item["occurrences"].forEach(function (occurance) {
      var d = new Date(occurance["start"])
      if (d.toDateString() == date.toDateString()) {
        events.push({
          time: d,
          value: item["name"] + " at " 
            + d.toLocaleString(LOCALE, {hour: "numeric", hour12: true})
        });
      }
    });
  });
  events.sort(function(a, b) {
    return a.time - b.time;
  });
  return events;
  //return events.map(function (evt) { return evt.value});
}
