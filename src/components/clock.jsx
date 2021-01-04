import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.trick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  trick() {
    this.setState({
      timer: new Date(),
    });
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <div>{timer.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export { Clock };
