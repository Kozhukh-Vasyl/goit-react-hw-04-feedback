import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import{AppContainer} from "./App.styled"


export const App =() => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);


  const leaveFeedback = (e) => {
      switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
 }
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    Math.round((good * 100) / countTotalFeedback) || 0;

    return (
      <AppContainer>
        <Section title="Please leave feedback">
         <FeedbackOptions
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={leaveFeedback}
          />
          </Section>
        <Section title="Statistics">

          {(countTotalFeedback)>0?<Statistics
            good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}/>:<Notification message={"There is no feedback"}/>}
        </Section>
      </AppContainer>
    );

}
