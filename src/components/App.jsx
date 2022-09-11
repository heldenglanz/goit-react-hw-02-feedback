import { Components } from 'react';
import Section from './Section'
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions"


export default class App extends Components {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleMakeFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state
    return good ? Math.round((good / this.countTotalFeedback()) * 100) : 0;
  }

  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (

      <div>

        <Section title="Please leave feedback" >
          <FeedbackOptions options={options} onMakeFeedback={this.handleMakeFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.positivePercentage} />
        </Section>

      </div>

    );
  }
};
