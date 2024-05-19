import { FeedbackStatGood, FeedbackStatNeutral,FeedbackStatBad, FeedbackStatTotal, FeedbackStatPercentage } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0 }) => {
   return (
      <div>
         <FeedbackStatGood>Good: {good}</FeedbackStatGood>
         <FeedbackStatNeutral>Neutral: {neutral}</FeedbackStatNeutral>
         <FeedbackStatBad>Bad: {bad}</FeedbackStatBad>
         <FeedbackStatTotal>Total: {total}</FeedbackStatTotal>
         <FeedbackStatPercentage>Positive feedback: {positivePercentage}%</FeedbackStatPercentage>
      </div>
   );
};