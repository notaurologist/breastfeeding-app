import React, {Component, PropTypes} from 'react';
import Label from './Label';

export default class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({
			value: evt.target.value,
		});
	}

	render() {
		const {
			name,
			type,
			placeholder,
			label,
			id,
			autoComplete,
			autoFocus,
			onKeyDown,
			onBlur,
		} = this.props;

		return (
			<div>
				{ label ? <Label id={ id || name } text={ label } /> : null }
				<input
					id={ id || name }
					type={ type }
					name={ name }
					value={ this.state.value }
					placeholder={ placeholder }
					autoComplete={ autoComplete ? 'on' : 'off' }
					autoFocus={ autoFocus }
					onChange={ this.handleChange }
					onKeyDown={ onKeyDown }
					onBlur={ onBlur } />
			</div>
		);
	}
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	autoComplete: PropTypes.bool,
	autoFocus: PropTypes.bool,
	onKeyDown: PropTypes.func,
	onBlur: PropTypes.func,
};

Input.defaultProps = {
	value: '',
	type: 'text',
	placeholder: '',
	label: '',
	id: '',
	autoComplete: true,
	autoFocus: false,
	onKeyDown: null,
	onBlur: null,
};
