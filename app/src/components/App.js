import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Timer from './Timer';
// import FeedingInput from './FeedingInput';

const App = () => (
  <MuiThemeProvider>
    <Timer
      initialMinutes={2}
      initialSeconds={0} />
    {/*<FeedingInput />*/}
  </MuiThemeProvider>
);

export default App;
