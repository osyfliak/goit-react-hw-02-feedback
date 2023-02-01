import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleFeedbackClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  //   totalFeedback = () => {
  //     this.state.good + this.state.neutral + this.state.bad;
  //   };
  render() {
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5">Good: {this.state.good}</p>
        <p className="text-center my-5">Neutral: {this.state.neutral}</p>
        <p className="text-center my-5">Bad: {this.state.bad}</p>
        <p className="text-center my-5">Total: {this.state.total}</p>
        <p className="text-center my-5">Positive feedback:</p>
        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            name="good"
            onClick={this.handleFeedbackClick}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Good
          </button>
          <button
            name="neutral"
            onClick={this.handleFeedbackClick}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Neutral
          </button>
          <button
            name="bad"
            onClick={this.handleFeedbackClick}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}
