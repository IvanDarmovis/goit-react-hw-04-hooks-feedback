import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = ev => {
    const { name } = ev.target;
    this.setState(prevState => ({
      ...this.state,
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, el) => total + el, 0);

  countPositiveFeedbackPercentage = () => {
    const t = this.countTotalFeedback();
    if (t) return ((this.state.good / t) * 100).toFixed(0) + '%';
    return '0';
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <span className="title">Please leave feedback</span>
          {Object.keys(this.state).map(key => (
            <button
              type="button"
              name={key}
              key={key}
              className="feedback__button"
              onClick={this.onButtonClick}
            >
              {key}
            </button>
          ))}
          <span className="title">Statistics</span>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}

export default App;
