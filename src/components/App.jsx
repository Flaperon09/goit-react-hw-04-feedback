import {useState} from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from './Section';
import { NotificationMessage } from './Notification';

export default function App() {

  // === ХУКи состояния
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // === Объект названий кнопок
  const nameOfButton = {
    good,
    neutral,
    bad,
  };

  // === Колбек по нажатию кнопок отзывов
  const onLeaveFeedback = (option) => { 
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: return;
    };
  };

  // === Подсчёт общего количества отзывов
  const countTotalFeedback = () => {
    return (good + neutral + bad)
  };
  
  // === Подсчёт процента положительных отзывов
  const countPositiveFeedbackPercentage = () => {
    return (Math.round((good / (good + neutral + bad)) * 100))
  };
  
    return (
      <div>
      
        <GlobalStyle />

        <Section
          title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(nameOfButton)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section
          title="Statistics">
          {countTotalFeedback() === 0
            ?
            <NotificationMessage
              message="There is no feedback" />
            :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      
      </div>
    );
};