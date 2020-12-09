import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  decrement = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    });
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return <div>Boom!</div>;
    } else {
      return <div onClick={this.decrement}>{this.state.secondsLeft} seconds left before I go boom!</div>;
    }
  }
}

export default Bomb;