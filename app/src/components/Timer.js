import React, {Component} from 'react';
import styles from '../styles/timer.css';

const MAX_OFFSET = 565.48;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: 0,
      seconds: 0,
      transition: 'initial',
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
        start: performance.now(),
      });
      this.timer = setTimeout(this.progress, 333);
    } else {
      clearTimeout(this.timer);
      // const finalTime = new Date(performance.now() - this.state.start);
      // const seconds = finalTime.getSeconds();
      // TODO: Do something with the final time
    }
  }

  progress() {
    const seconds = (performance.now() - this.state.start) / 1000;
    this.setState({
      seconds,
      transition: 'stroke-dashoffset 1s linear',
    });

    this.timer = setTimeout(this.progress, 333);
  }

  render() {
    const inlineStyles = {
      strokeDashoffset: MAX_OFFSET - (this.state.seconds / 60) * Math.PI * 180,
      transition: this.state.transition,
    };

    return (
      <div className={ styles.container }
        onTouchTap={ this.toggleTimer }>
        <div className={ styles.minutes }>{ parseInt(this.state.seconds / 60, 10) }</div>
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
