import { FeedbackButton, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div>
			<ButtonWrapper>
				{options.map((option) => (
					<FeedbackButton key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option.replace(option[0], option[0].toUpperCase())}</FeedbackButton>
				))}
			</ButtonWrapper>
		</div>
	);
};