import React, {Component} from 'react';
import styles from '../styles/timer.css';

const MAX_OFFSET = 565.48;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
			minutes: 0,
      seconds: 0,
    };

		this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

	toggleTimer(evt) {
		evt.preventDefault();
		if (!this.timer) {
			this.timer = setTimeout(() => this.progress(this.state.seconds + 1), 1000);
		} else {
			clearTimeout(this.timer);
		}
	}

  progress(seconds) {
    if (seconds > 60) {
      this.setState({
				minutes: this.state.minutes + 1,
				seconds: 0,
			});
    } else {
      this.setState({seconds});
    }

		this.timer = setTimeout(() => this.progress(this.state.seconds + 1), 1000);
  }

  render() {
		const inlineStyles = {
			strokeDashoffset: MAX_OFFSET - (this.state.seconds / 60) * Math.PI * 180,
		};

    return (
			<div className={ styles.container }
				onTouchTap={ this.toggleTimer }>
				<div className={ styles.minutes }>{ this.state.minutes }</div>
				<svg className={ styles.seconds }>
					<circle
						className={ styles.track }
						r="90"
						cx="100"
						cy="100"
						fill="transparent"
						strokeDasharray={ MAX_OFFSET }
						strokeDashoffset={ 0 }></circle>
					<circle
						className={ styles.progress }
						style={ inlineStyles }
						r="90"
						cx="100"
						cy="100"
						fill="transparent"
						strokeDasharray={ MAX_OFFSET }
						strokeDashoffset={ MAX_OFFSET }></circle>
				</svg>
			</div>
			);
  }
}
