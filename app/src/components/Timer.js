import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
			minutes: props.initialMinutes,
      seconds: props.initialSeconds,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.progress(this.state.seconds + 1), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(seconds) {
    if (seconds >= 60) {
      this.setState({
				minutes: this.state.minutes + 1,
				seconds: 0,
			});
    } else {
      this.setState({
				seconds,
			});
    }
  }

  render() {
    return (
			<div>
				{ this.state.minutes }
				<CircularProgress
					style={ {transform:'rotateZ(-90deg)'} }
					mode="determinate"
					min={ 0 }
					max={ 60 }
					value={ this.state.seconds } />
			</div>
			);
  }
}

Timer.propTypes = {
	initialMinutes: PropTypes.number,
	initialSeconds: PropTypes.number,
};

Timer.defaultProps = {
	initialMinutes: 0,
	initialSeconds: 0,
};
