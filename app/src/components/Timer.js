import {h, Component} from 'preact';
import styles from '../styles/timer.css';

const TIMER_RADIUS = 90;
const MAX_OFFSET = 2 * Math.PI * TIMER_RADIUS;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: 0,
      seconds: 0,
    };

    this.toggleTimer = this.toggleTimer.bind(this);
    this.progress = this.progress.bind(this);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }

  toggleTimer(evt) {
    evt.preventDefault();
    if (!this.requestId) {
      this.setState({
        start: performance.now(),
      });
      this.requestId = window.requestAnimationFrame(this.progress);
    } else {
      window.cancelAnimationFrame(this.requestId);
      // const finalTime = new Date(performance.now() - this.state.start);
      // const seconds = finalTime.getSeconds();
      // TODO: Do something with the final time
    }
  }

  progress(ms) {
    const seconds = (ms - this.state.start) / 1000;
    this.setState({
      seconds,
    });

    this.requestId = window.requestAnimationFrame(this.progress);
  }

  render() {
    const inlineStyles = {
      strokeDashoffset: MAX_OFFSET - (this.state.seconds / 60) * MAX_OFFSET,
    };

    return (
      <div className={ styles.container }
        onTouchTap={ this.toggleTimer }>
        <div className={ styles.minutes }>{ Math.floor(this.state.seconds / 60) }</div>
        <svg className={ styles.seconds }>
          <circle
            className={ styles.track }
            r={ TIMER_RADIUS }
            cx="100"
            cy="100"
            fill="transparent"></circle>
          <circle
            className={ styles.progress }
            style={ inlineStyles }
            r={ TIMER_RADIUS }
            cx="100"
            cy="100"
            fill="transparent"
            strokeDasharray={ MAX_OFFSET }></circle>
        </svg>
      </div>
      );
  }
}
