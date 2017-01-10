import 'babel-polyfill';
import {render, h} from 'preact';
import {Provider} from 'preact-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import * as Perf from 'react-addons-perf';

const store = configureStore();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  // MWE: will only work on non prod builds
  window.perfStart = function() {
    Perf.start();
  }

  window.perfStop = function() {
    Perf.stop();
    Perf.printInclusive();
    Perf.printWasted();
  }
}
