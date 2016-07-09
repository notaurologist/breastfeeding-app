import React, {PropTypes} from 'react';
import Label from './Label';

const buildOptions = (option, i) => {
	let text;
	let value;
	if (typeof option === 'string') {
		text = value = option;
	} else {
		text = option.text || option;
		value = option.value || option;
	}

	return (
		<option
			key={ i }
			value={ value }>{ text }</option>
		);
};

const Select = ({name, options, defaultValue, label, id}) => (
	<div>
		{ label ? <Label id={ id || name } text={ label } /> : null }
		<select id={ id || name } name={ name } defaultValue={ defaultValue }>
			{ options.map(buildOptions) }
		</select>
	</div>
);

Select.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.shape({
				text: PropTypes.string,
				value: PropTypes.string,
			}),
		])
	).isRequired,
	defaultValue: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
};

Select.defaultProps = {
	defaultValue: '',
	label: '',
	id: '',
};

export default Select;
