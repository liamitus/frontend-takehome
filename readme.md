## If any of the instructions are unclear, please email henry@live.xyz

# Installation

1) git clone
`git clone https://github.com/calendreco/calendar-challenge.git`

2) Install dependencies
`cd live-calendar-challenge && npm install`

3) Install test runner
`npm install -g karma-cli`

# Running tests
`karma start`

# What's in the box
* `src/api-response.js` - a slim stub of the expected data response for GET `/events`. Please *don't change this file*. The code you write should be able to handle this data exactly as it is structured in this file.
* `src/calendar-directive.js` - a stub of a directive that should be fleshed out to meet the criteria
* `test/calendar.js` - a set of karma tests that test the functionality of the directive

# The challenge
Using AngularJS and no other supporting libraries (e.g. jQuery, lodash, ES6, etc.), create a monthly calendar UI (see example figure below) that showcases all the events happening at the Brooklyn Bowl bar/music hall for the _current_ month, whatever month that is.

Much like Google Calendar, the calendar UI should show numbered days of the month. Events happening on a particular day should show their start time and event name on the given day in the calendar and be listed in start time order. Some events, like Happy Hour, occur multiple times, while other events occur only once.

![Example](https://cloud.githubusercontent.com/assets/3581705/13577019/693a01e0-e45e-11e5-857f-b42f5752f6e8.png)
Each row represents 7 days (Mon - Sun). Days of the month are numbered at the corner of each box.

Some empty test stubs have been provided in `test/calendar.js` that we expect to pass at a minimum. The tests leverage [jasmine](http://jasmine.github.io/2.0/introduction.html) - feel free to swap this for another matcher if you'd rather. They should run on node 4.x without any intermediary build step.

# Evaluation Criteria
* No use of any support libs (jQuery,eact, lodash, LESS, SASS, etc...) other than AngularJS.
* We expect you to produce production-level quality code.

This isn't a test of ability to work in isolation. If the spec is ambigious please contact henry@live.xyz :)
