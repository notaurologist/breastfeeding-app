import {h} from 'preact';

import Timer from './Timer';
import {addFeeding} from '../actions';

const handleSubmit = (evt) => {
  evt.preventDefault();
  addFeeding();
};

const FeedingInput = () => (
  <Timer onTouchTap={ handleSubmit } />
);

export default FeedingInput;
