import React from 'react';
import Calendar from '../src/app';
import renderer from 'react-test-renderer';

describe('a sun-mon calendar with events on each day', function() {

  test('should have a working test runner', function() {
    // Sanity check, feel free to remove this test
    expect(2).toEqual(2);
  });

  test('should render 4 weeks for the month feb/2015', function() {
    const cal = renderer.create(
      <Calendar date={2015, 1, 1} />
    );

  });

  test('should render 5 weeks for the month march/2016', function() {

  });

  test('should render 6 weeks for the month dec/2017', function() {

  });

  test('should render 31 days for the month march/2016', function() {

  });

  test('should render 1 event on 1/march/2016', function() {

  });

  test('should render 3 events on 13/march/2016 in start order', function() {

  });
});
