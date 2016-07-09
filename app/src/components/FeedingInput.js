import React from 'react';

import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';

import {addFeeding} from '../../actions';

const handleSubmit = (evt) => {
  evt.preventDefault();
  addFeeding();
};

const FeedingInput = () => (
	<Form
		action="/route/add"
		onSubmit={ handleSubmit }>
		<label htmlFor="left_side">Left
			<Input type="radio" id="left_side" name="side" value="left" />
		</label>
		<label htmlFor="right_side">Right
			<Input type="radio" id="right_side" name="side" value="right" />
		</label>
		<label htmlFor="wet">Wet
			<Input type="number" id="wet" name="wet" value="0" />
		</label>
		<label htmlFor="soiled">Soiled
			<Input type="number" id="soiled" name="soiled" value="0" />
		</label>
		<Button>Start/Stop</Button>
	</Form>
);

export default FeedingInput;
