import React, {PropTypes} from 'react';

const Button = ({type, onClick, children}) => (
	<button
		type={ type }
		onClick={ onClick }>{ children }</button>
);

Button.propTypes = {
	type: PropTypes.string,
	onSubmit: PropTypes.func,
	onClick: PropTypes.func,
	children: PropTypes.string.isRequired,
};

Button.defaultProps = {
	type: 'button',
	onClick: null,
};

export default Button;
