## If any of the instructions are unclear, please email henry@live.xyz

# Installation

1) git clone
`git clone https://github.com/calendreco/frontend-takehome.git`

2) Install dependencies
`cd frontend-takehome && npm install`

# Running tests
`npm test`

# Building
`npm build` then open `dist/index.html` in your browser

# What's inside
* `src/api-response.js` - a slim stub of the expected data response for GET `/events`. Please *don't change this file*. The code you write should be able to handle this data exactly as it is structured in this file.
* `src/` - container for your source files. An empty stylesheet and javascript file have been included.
* `__tests__/calendar.js` - a set of jest tests that test the functionality of the component
* some defaults around react to get you started

# The challenge
Using React (or another view library) but no other supporting libraries (e.g. jQuery, lodash, etc.), create a monthly calendar UI (see example figure below) that showcases all the events happening at the Brooklyn Bowl bar/music hall for the _current_ month, whatever month that is.

Much like Google Calendar, the calendar UI should show numbered days of the month. Events happening on a particular day should show their start time and event name on the given day in the calendar and be listed in start time order. Some events, like Happy Hour, occur multiple times, while other events occur only once.

![Example](https://cloud.githubusercontent.com/assets/3581705/13577019/693a01e0-e45e-11e5-857f-b42f5752f6e8.png)
Each row represents 7 days (Mon - Sun). Days of the month are numbered at the corner of each box.

Some empty test stubs have been provided in `__test__/calendar.js` that we expect to pass at a minimum. The tests leverage [jest](https://facebook.github.io/jest/docs/en/getting-started.html) - feel free to swap this for another lib if you'd rather. They should run on node 4.x without any intermediary build step.

If you don't want to use the provided build system (babel etc...) please feel free to ignore it.

# Evaluation Criteria
* No use of any support libs (jQuery, lodash, LESS, SASS, etc...) with the exception of React or another view library.
* We expect you to produce production-level quality code.
* Demonstrated concern for the user experience.
* Ability to communicate the results, what was built, and what could be better if given more time.

This isn't a test of ability to work in isolation. Ask questions when the spec is unclear by contacting Henry at henry@live.xyz.
