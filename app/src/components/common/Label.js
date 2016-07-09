import React, {PropTypes} from 'react';

const Label = ({id, text}) => (
	<label htmlFor={ id }>{ text }</label>
);

Label.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Label;
