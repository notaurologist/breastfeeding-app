import React from 'react';

const FeedingInput = () => (
	<form>
		<label htmlFor="left_side">Left
			<input type="radio" id="left_side" name="side" value="left" />
		</label>
		<label htmlFor="right_side">Right
			<input type="radio" id="right_side" name="side" value="right" />
		</label>
		<label htmlFor="wet">Wet
			<input type="number" id="wet" name="wet" value="0" />
		</label>
		<label htmlFor="soiled">Soiled
			<input type="number" id="soiled" name="soiled" value="0" />
		</label>
		<button>Start/Stop</button>
	</form>
);

export default FeedingInput;
