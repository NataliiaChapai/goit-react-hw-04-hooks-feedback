import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function App() {
  const  [good, setGood]  = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const reviews = { good, neutral, bad };
  
  function onBtnClick(event) {
    const { name } = event.target;
    
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        break;
    }
  }
  
  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    if (countTotalFeedback()) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
    return 0;
  }

  return (
      <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(reviews)}
              onLeaveFeedback={onBtnClick}
            />
        </Section>
      
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                percentage={countPositiveFeedbackPercentage()}
              />
            )}
        </Section>
        </div>
    );
    
}




