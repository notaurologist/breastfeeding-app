import React from 'react';

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
