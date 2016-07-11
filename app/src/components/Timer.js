import React, {Component} from 'react';
import styles from '../styles/timer.css';

const MAX_OFFSET = 565.48;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
			start: 0,
			minutes: 0,
      seconds: 0,
			transition: 'initial',
			total: '0:00',
    };

		this.toggleTimer = this.toggleTimer.bind(this);
		this.progress = this.progress.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

	toggleTimer(evt) {
		evt.preventDefault();
		if (!this.timer) {
			this.setState({
				start: Date.now(),
			});
			this.timer = setTimeout(this.progress, 1000);
		} else {
			clearTimeout(this.timer);
			const finalTime = new Date(Date.now() - this.state.start);
			const seconds = finalTime.getSeconds();
			this.setState({
				total: `${finalTime.getMinutes()}:${seconds < 10 ? '0' + seconds : seconds}`,
			});
		}
	}

  progress() {
		const seconds = (Date.now() - this.state.start) / 1000;
    if (seconds > 60) {
      this.setState({
				minutes: this.state.minutes + 1,
				seconds: 0,
				transition: 'initial',
			});
    } else {
      this.setState({
				seconds,
				transition: 'stroke-dashoffset 1s linear',
			});
    }

		this.timer = setTimeout(this.progress, 1000);
  }

  render() {
		const inlineStyles = {
			strokeDashoffset: MAX_OFFSET - (this.state.seconds / 60) * Math.PI * 180,
			transition: this.state.transition,
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
				{ this.state.total }
			</div>
			);
  }
}
