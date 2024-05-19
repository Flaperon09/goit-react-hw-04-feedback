import React, { Component } from 'react';
import { GlobalStyle } from "../GlobalStyle";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from './Section';
import { NotificationMessage } from './Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Колбек по нажатию кнопок отзывов
  onLeaveFeedback = (option) => {    
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      }
    });
  };

  // Подсчёт общего количества отзывов
  countTotalFeedback = () => {
      return (this.state.good + this.state.neutral + this.state.bad)
  };
  
  // Подсчёт процента положительных отзывов
  countPositiveFeedbackPercentage = () => {
    return (Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100))
  };
  
  render() {
    return (
      <div>
      
        <GlobalStyle />

        <Section
          title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section
          title="Statistics">
          {this.countTotalFeedback() === 0
            ?
            <NotificationMessage
              message="There is no feedback" />
            :
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      
      </div>
    );
  }
};

export default App;