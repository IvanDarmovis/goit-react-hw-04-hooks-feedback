import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const marks = { good, neutral, bad };

  function onButtonClick(ev) {
    const { name } = ev.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }

  function countTotalFeedback() {
    return Object.values(marks).reduce((total, el) => total + el, 0);
  }

  function countPositiveFeedbackPercentage() {
    const t = countTotalFeedback();
    if (t) return ((good / t) * 100).toFixed(0) + '%';
    return '0';
  }

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
            options={Object.keys(marks)}
            onLeaveFeedback={onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </div>
  );
}

export default App;
