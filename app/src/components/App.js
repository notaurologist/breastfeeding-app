import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import FeedingInput from './FeedingInput';

const App = () => (
  <FeedingInput />
);

export default App;
