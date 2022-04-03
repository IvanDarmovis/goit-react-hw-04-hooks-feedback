import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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
    console.log();
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
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onButtonClick}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() < 1 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
