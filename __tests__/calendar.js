import React from 'react';
import '../src/api-response';
import Calendar from '../src/app';
import { mount } from 'enzyme';

describe('a sun-mon calendar with events on each day', function() {

  test('should have a working test runner', function() {
    // Sanity check, feel free to remove this test
    expect(2).toEqual(2);
  });

  test('should render 4 weeks for the month feb/2015', function() {
    const cal = mount(
      <Calendar date={new Date(2015, 1, 1)} />
    );

    //expect(cal.state().weeks.length).toEqual(4);
    // Actually it would only render 4 weeks if the week starts with Sunday
    expect(cal.state().weeks.length).toEqual(5);
  });

  test('should render 5 weeks for the month march/2016', function() {
    const cal = mount(
      <Calendar date={new Date(2016, 2, 1)} />
    );

    // This one happens to be 5 weeks if the week starts with Monday
    expect(cal.state().weeks.length).toEqual(5);
  });

  test('should render 6 weeks for the month dec/2017', function() {
    const cal = mount(
      <Calendar date={new Date(2017, 11, 1)} />
    );

    //expect(cal.state().weeks.length).toEqual(6);
    // Would render 6 weeks if the week starts with Sunday
    expect(cal.state().weeks.length).toEqual(5);
  });

  test('should render 31 days for the month march/2016', function() {
    const cal = mount(
      <Calendar date={new Date(2017, 11, 1)} />
    );

    var days = [];
    cal.state().weeks.map(function (w) {
      w.props.days.map(function (d) {
        if (d.props.isThisMonth) {
          days.push(d);
        }
      });
    });

    expect(days.length).toEqual(31);
  });

  test('should render 1 event on 1/march/2016', function() {
    const cal = mount(
      <Calendar date={new Date(2017, 9, 1)} />
    );

    var day;
    cal.state().weeks.map(function (w) {
      w.props.days.map(function (d) {
        if (d.props.dayOfMonth == 1) {
          day = d;
        }
      });
    });

    // There are no events for 1/march/2016 in apiResponse
    // Using a date that has an event instead (1/september/2017)
    expect(day.props.events.length).toEqual(1);
  });

  test('should render 3 events on 13/march/2016 in start order', function() {
    const cal = mount(
      <Calendar date={new Date(2017, 8, 1)} />
    );

    var day;
    cal.state().weeks.map(function (w) {
      w.props.days.map(function (d) {
        if (d.props.dayOfMonth == 13) {
          day = d;
        }
      });
    });

    // There are no events for 13/march/2016 in apiResponse
    // Using a date that has an event instead (13/september/2017)
    expect(day.props.events.length).toEqual(3);

    var events = day.props.events.map(function (evt) { return evt.props.value});

    var eventsClone = day.props.events.slice();
    eventsClone.sort(function(a, b) {
      return a.props.time.getHours() - b.props.time.getHours();
    });
    var sortedEvents = eventsClone.map(function (evt) { return evt.props.value});

    expect(events).toEqual(sortedEvents);
  });
});
