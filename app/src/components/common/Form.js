import React, {PropTypes} from 'react';

const Form = ({action, method, onSubmit, children}) => (
	<form
		action={ action }
		method={ method }
		onSubmit={ onSubmit }>
		{ children }
	</form>
);

Form.propTypes = {
	action: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	method: PropTypes.string,
	onSubmit: PropTypes.func,
};

Form.defaultProps = {
	method: 'POST',
	onSubmit: null,
};

export default Form;
